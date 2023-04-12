import { useRouter } from 'next/router';
import { Button, Card, Center, CardHeader, Heading, CardBody, Stack, Box, Text, StackDivider, useDisclosure} from "@chakra-ui/react";
import Chapter from '../../components/Chapter';
import { useState } from "react";
import AddChapterModal from '../../components/AddChapterModal';
import { getBook } from '../../lib/queryLib';

const BookPage = ({ bookData }) => {
    const router = useRouter();
    const { bookId } = router.query;


    const [chapterArr, setChapterArr] = useState(bookData.chapters);
    const listChapters = chapterArr.map(chapter => <Chapter id={chapter.id} key={chapter.id} chapterNum={chapter.chapterNum} chapterTitle={chapter.chapterTitle} exerciseArrProp={chapter.exercises}/>);

    async function handleAddChapter(chapterTitle, numExercises){
        if(chapterTitle && numExercises){
            try {
                const chapterData = {chapterTitle: chapterTitle, numExercises: numExercises, chapterNum: chapterArr.length+1};
                const res = await fetch(`/api/books/${bookId}/chapters`, { 
                        method: 'POST',
                        body: JSON.stringify(chapterData),
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                if(!res.ok){
                    throw new Error('Add chapter request failed', res.body);
                }

                const chapterJson = await res.json();
                console.log(chapterJson);
                setChapterArr([...chapterArr, {
                    id: chapterJson.id,
                    chapterNum: chapterJson.chapterNum,
                    chapterTitle: chapterJson.chapterTitle,
                    exercises: chapterJson.exercises
                }]);

            } catch(e) {
                // Catch code
                console.log('There was an error', e);
            }
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Center bg='tomato' p={5}>
            <Card>
            <CardHeader display='flex' justifyContent='center'>
                <Heading>{bookData.bookName}</Heading>
            </CardHeader>

            <CardBody width='550px'>
                <Stack divider={<StackDivider />} spacing='4'>
                    {listChapters}
                    <Button colorScheme='linkedin' variant='outline' width='350px' alignSelf='center' onClick={onOpen}>
                        Add Chapter
                    </Button>
                    <AddChapterModal isOpen={isOpen} onClose={onClose} onAddChapter={handleAddChapter}/>
                </Stack>
            </CardBody>
            </Card>
        </Center>
    );
}
 
export async function getServerSideProps(context) {
    const {bookId} = context.query;
    const book = await getBook(bookId);
    return {
      props: {bookData: book}, // will be passed to the page component as props
    }
}

export default BookPage;

import { Button, Card, Center, CardHeader, Heading, CardBody, Stack, Box, Text, StackDivider} from "@chakra-ui/react";
import Chapter from '../components/Chapter'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const BookPage = () => {
    const [chapterArr, setChapterArr] = useState([]);

    const listChapters = chapterArr.map(chapter => <Chapter id={chapter.id} key={chapter.id} chapterNo={chapter.chapterNo}/>);

    function handleAddChapter(){
        setChapterArr([...chapterArr, {
            id: uuidv4(),
            chapterNo: chapterArr.length+1,
        }]);
    }

    return (
        <Center bg='tomato' p={5}>
            <Card>
            <CardHeader display='flex' justifyContent='center'>
                <Heading>Book Title</Heading>
            </CardHeader>

            <CardBody width='550px'>
                <Stack divider={<StackDivider />} spacing='4'>
                    {listChapters}
                    <Button colorScheme='linkedin' variant='outline' width='350px' alignSelf='center' onClick={handleAddChapter}>
                        Add Chapter
                    </Button>
                </Stack>
            </CardBody>
            </Card>
        </Center>
    );
}
 
export default BookPage;
import { Stack, Text, Card, CardBody, Heading, Divider, Image, CardFooter, HStack, IconButton, LinkBox, LinkOverlay} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';

const BookCard = ({id, title, author, onDeleteBook}) => {
    return ( 
        <LinkBox>
            <Card minHeight='300px' maxHeight='auto'>
                <CardBody>
                    <Image
                        src='https://media.springernature.com/full/springer-static/cover-hires/book/978-0-387-89486-7'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>
                            <LinkOverlay as={NextLink} href={`/books/${id}`}>{title}</LinkOverlay>
                        </Heading>
                        <Text color='gray.400'>{author}</Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <HStack>
                        <IconButton aria-label='Edit Book' icon={<EditIcon />} />
                        <IconButton aria-label='Delete Book' icon={<DeleteIcon />} onClick={() => onDeleteBook(id)} />
                    </HStack>
                </CardFooter>
            </Card>
        </LinkBox>
    );
}
 
export default BookCard;
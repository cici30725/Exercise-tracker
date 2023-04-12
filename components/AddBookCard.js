import { AddIcon } from "@chakra-ui/icons";
import { Center, IconButton, Text, useDisclosure} from "@chakra-ui/react";
import AddBookModal from "./AddBookModal";

const AddBookCard = ({ onAddBook }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return ( 
        <>
            <Center display='flex' flexDirection='column'>
                    <IconButton size='lg' aria-label='Add Book' icon={<AddIcon />} onClick={onOpen} />
                    <Text margin='5' fontWeight='bold' color='gray.500'>Add Book</Text>

            </Center>
            <AddBookModal isModalOpen={isOpen} onModalClose={onClose} onAddBook={onAddBook}/>
        </>
    );
}
 
export default AddBookCard;
import { Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalContent, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import AddBookForm from './AddBookForm';
const AddBookModal = ({isModalOpen, onModalClose, onAddBook}) => {
    return ( 
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                    <ModalBody>
                        <AddBookForm onModalClose={onModalClose} onAddBook={onAddBook}/>
                    </ModalBody>
            </ModalContent>
        </Modal>
    );
}
 
export default AddBookModal;
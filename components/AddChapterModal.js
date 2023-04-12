import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import AddChapterForm from './AddChapterForm';

function AddChapterModal({ isOpen, onClose, onAddChapter }) {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <AddChapterForm onModalClose={onClose} onAddChapter={onAddChapter}/> 
                </ModalBody>
            </ModalContent>
        </Modal>
      </>
    )
} 
export default AddChapterModal;
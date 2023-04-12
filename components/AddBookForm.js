import { Field, Form, Formik } from 'formik';
import { FormControl, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react';

const AddBookForm = ({ onModalClose, onAddBook }) => {

    function validateBookTitle(value) {
        let error
        if (!value) {
          error = 'Book Title is required'
        }
        return error
    }

    function validateAuthor(value) {
        let error
        if (!value) {
          error = 'Author is required'
        }
        return error
    }

    return (
        <Formik
        initialValues={{ bookTitle: '', author: '' }}
        onSubmit={async (values, actions) => {
            
            await onAddBook({
                title: values.bookTitle,
                author: values.author
            });

            actions.setSubmitting(false);
            onModalClose();
        }}
        >
        {(props) => (
            <Form>
                <Field name='bookTitle' validate={validateBookTitle}>
                    {({ field, form }) => (
                            <FormControl isInvalid={form.errors.bookTitle && form.touched.bookTitle}>
                                <FormLabel>Book Title</FormLabel>
                                <Input {...field}/>
                                <FormErrorMessage>{form.errors.bookTitle}</FormErrorMessage>
                            </FormControl>
                    )}
                </Field>

                <Field name='author' validate={validateAuthor}>
                    {({ field, form }) => (
                            <FormControl isInvalid={form.errors.author && form.touched.author}>
                                <FormLabel>Author</FormLabel>
                                <Input {...field}/>
                                <FormErrorMessage>{form.errors.author}</FormErrorMessage>
                            </FormControl>
                    )}
                </Field>
                <Button
                    my={4}
                    colorScheme='teal'
                    type='submit'
                    isLoading={props.isSubmitting}
                >
                    Submit 
                </Button>
            </Form>
        )}
        </Formik>
    )
}

export default AddBookForm;
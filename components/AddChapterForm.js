import { Field, Form, Formik } from 'formik';
import { FormControl, FormLabel, Input, Button, FormErrorMessage, Select } from '@chakra-ui/react';
import * as Yup from 'yup';

const AddBookForm = ({ onModalClose, onAddChapter }) => {

    return (
        <Formik
        initialValues={{ chapterTitle: '', numExercises: 1}}
        validationSchema={Yup.object({
            chapterTitle: Yup.string().required('Required'),
            numExercises: Yup.number('Must be a number').required('Required').positive('Must be positive').integer('Must be integer').max(30, 'Maximum number of exercises is 30')
        })}
        onSubmit={(values, actions) => {
            
            console.log(values);
            onAddChapter(values.chapterTitle, values.numExercises);

            actions.setSubmitting(false);
            onModalClose();
        }}
        >
        {(props) => (
            <Form>
                <Field name='chapterTitle'>
                    {({ field, form }) => (
                            <FormControl isInvalid={form.errors.chapterTitle && form.touched.chapterTitle}>
                                <FormLabel>Chapter Title</FormLabel>
                                <Input {...field}/>
                                <FormErrorMessage>{form.errors.chapterTitle}</FormErrorMessage>
                            </FormControl>
                    )}
                </Field>

                <Field name='numExercises'>
                    {({ field, form }) => (
                            <FormControl isInvalid={form.errors.numExercises && form.touched.numExercises}>
                                <FormLabel>Number of Exercises</FormLabel>
                                <Input type='number' {...field}/>
                                <FormErrorMessage>{form.errors.numExercises}</FormErrorMessage>
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
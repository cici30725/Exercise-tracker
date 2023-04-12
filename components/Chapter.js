import {Stack, Button, HStack, Heading, CircularProgress, CircularProgressLabel, Collapse, TableContainer, Table, Thead, Tr, Td, Th, Tbody, useDisclosure, Checkbox } from '@chakra-ui/react'
import ExerciseEntry from './ExerciseEntry';
import { useState } from 'react';

const Chapter = ({ id, chapterNum, chapterTitle, exerciseArrProp }) => {
    const [ exerciseArr, setExerciseArr ] = useState(exerciseArrProp);
    const { isOpen, onToggle } = useDisclosure();

    const listExercises = exerciseArr.map(ex => <ExerciseEntry id={ex.id} key={ex.id} exerciseNo={ex.exerciseNum} done={ex.done} star={ex.star}/>);

    function handleAddExercise(){
        /*
        setExerciseArr([...exerciseArr, {
            id: uuidv4(),
            exerciseNo: exerciseArr.length+1,
            done: false,
            star: false
        }]);
        */
        console.log('Add exercise');
    }

    return (
        <>
            <Button width='500px' height='fit-content' onClick={onToggle} py='5px'>
                <HStack spacing='10px'>
                <Heading size='md'>Chapter {chapterNum}: {chapterTitle}</Heading>
                <CircularProgress value={80} color='green.400'>
                    <CircularProgressLabel>80%</CircularProgressLabel>
                </CircularProgress>
                </HStack>
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Stack>
                    <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Exercise No.</Th>
                                <Th>Finished</Th>
                                <Th isNumeric>Star</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {listExercises}
                        </Tbody>
                    </Table>
                    </TableContainer>
                    <Button colorScheme='teal' variant='outline' width='50%' alignSelf='center' onClick={handleAddExercise}>
                        Add Exercise
                    </Button>
                </Stack>
            </Collapse>
        </>

    );
}
 
export default Chapter;
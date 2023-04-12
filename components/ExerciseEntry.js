import { Tr, Td, Checkbox } from '@chakra-ui/react';

const ExerciseEntry = ({id, exerciseNo, done, star}) => {

    async function handleChecked(type, checked){
        // const checked = e.target.checked;
        // const ex = await modifyDone(id, checked);
        try {
            const exerciseData = {exId: id, type: type, checked: checked};
            const res = await fetch(`/api/exercise`, { 
                    method: 'PATCH',
                    body: JSON.stringify(exerciseData),
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
            if(!res.ok){
                throw new Error('Patch exercise failed', res.body);
            }

            const exerciseJson = await res.json();
            console.log(exerciseJson);
        } catch(e) {
            // Catch code
            console.log('There was an error', e);
        }
    }

    return ( 
        <Tr>
            <Td>{exerciseNo}</Td>
            <Td>
                <Checkbox defaultChecked={done} onChange={async (e) => handleChecked('done', e.target.checked)}/>
            </Td>
            <Td>
                <Checkbox defaultChecked={star} onChange={async (e) => handleChecked('star', e.target.checked)}/>
            </Td>
        </Tr>

    );
}
 
export default ExerciseEntry;
import { ViewIcon, EditIcon } from "@chakra-ui/icons";
import { Text, Card, Box, Heading, CardBody, CardFooter, CardHeader, SimpleGrid, Flex, HStack, Button, Divider } from "@chakra-ui/react";

const Dashboard = () => {
    const arr = [...Array(10).keys()]
    var randomParagraph = require('random-paragraph');
    const text = randomParagraph({sentences: 4})
    return ( 
        <>
        <SimpleGrid spacing={10} minChildWidth='300px'>
            {arr && arr.map(id => (
                <Card key={id} borderTop='8px' borderColor='purple.400' bg='white'>
                    <CardHeader>
                        <Flex gap={5}>
                            <Box w="50px" h='50px'>
                                <Text>AV</Text>
                            </Box>

                            <Box>
                                <Heading as='h3' size='sm'>Title</Heading>
                                <Text>by Author</Text>
                            </Box>
                        </Flex>
                    </CardHeader> 

                    <CardBody color='gray.500'>
                        <Text>some text</Text>
                    </CardBody>

                    <Divider borderColor='gray.200'/>

                    <CardFooter>
                        <HStack>
                            <Button variant='ghost' leftIcon={<ViewIcon/>}>Watch</Button>
                            <Button variant='ghost' leftIcon={<EditIcon/>}>Comment</Button>
                        </HStack>
                    </CardFooter>
                </Card>
            ))}
        </SimpleGrid>
        
        </>
    );
}
 
export default Dashboard;
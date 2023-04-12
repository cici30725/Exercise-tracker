import { Flex, Box, Heading, Button, Text, Spacer, HStack } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Flex as="nav" p='10px' alignItems='center' mb='40px'>
            <Heading as="h1">My Tasks</Heading>
            <Spacer />
            
            <HStack spacing="20px">
                <Box bg='gray.200' p='10px'>M</Box>
                <Text>kang@email.com</Text>
                <Button colorScheme="purple">Logout</Button>
            </HStack>
        </Flex>
    );
}
 
export default Navbar;
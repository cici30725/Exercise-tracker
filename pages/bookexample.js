// index.html
import { useState } from 'react';
import {Box, Heading, Container, Stack, Button, useDisclosure, Collapse, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td
,Checkbox,
HStack, CircularProgress, CircularProgressLabel} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';

function BookExample() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box h='100vh' bg='blackAlpha.600' p={5}>
      <Container bg='white' p={5} centerContent borderRadius='10px'>
        <Heading m={5}>Book Titile</Heading>
        <Stack  width='90%'>

          <Button width='100%' height='fit-content' onClick={onToggle} py='5px'>
            <HStack spacing='10px'>
              <Heading size='md'>chapter 1</Heading>
              <CircularProgress value={80} color='green.400'>
                <CircularProgressLabel>80%</CircularProgressLabel>
              </CircularProgress>
            </HStack>
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>
                      <Checkbox onChange={(e) => console.log('changed')}/>
                    </Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Collapse>

        </Stack>
      </Container>
    </Box>
  );
}

export default BookExample;
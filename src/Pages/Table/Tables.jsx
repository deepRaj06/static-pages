import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Badge,
  Button,
  Box,
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
} from "@chakra-ui/react";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../Home/Home";
import { useState } from "react";

const Tables = () => {
  const [widthTable, setWidthTable] = useState("100%");
  const [widthTableClose, setWidthTableClose] = useState("100%");
  console.log(widthTableClose);
  return (
    <>
      <Home
        setWidthTable={setWidthTable}
        setWidthTableClose={setWidthTableClose}
      />
      <Box w="100%" backgroundColor="whitesmoke" p="1rem" h="90.6vh">
        <Box w={widthTable}>
          {widthTable === "86%" ? (
            <Flex
              marginLeft="14rem"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text>DataTables</Text>
              <Text>Home / Table / Tables</Text>
            </Flex>
          ) : (
            <Flex
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text>DataTables</Text>
              <Text>Home / Table / Tables</Text>
            </Flex>
          )}
        </Box>

        <Box w={widthTable} backgroundColor="white">
          <Text p="0.8rem" textAlign="start">
            DataTables
          </Text>
          {widthTable === "86%" ? (
            <>
              <Box pl="1rem" marginLeft="14rem">
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Flex>
                      <Text>Show</Text>
                      <NumberInput
                        size="xs"
                        maxW={16}
                        defaultValue={10}
                        min={1}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      <Text>entries</Text>
                    </Flex>
                  </Box>
                  <Box pr="1rem">
                    <Flex>
                      <Text>Search:</Text>
                      <Input />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <TableContainer marginLeft="14rem">
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Position</Th>
                      <Th>Office</Th>
                      <Th>Age</Th>
                      <Th>Start Date</Th>
                      <Th>Salary</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Box p="1rem">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Box>
                      <Text>Showing 1 to 10 of 57 entries</Text>
                    </Box>
                    <Box>
                      <Flex>
                        <Box border="1px solid grey" p="0.2rem">
                          <Text>Previous</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>1</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>2</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>3</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>4</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>5</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>6</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>Next</Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </TableContainer>
            </>
          ) : (
            <>
              <Box pl="1rem">
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Flex>
                      <Text>Show</Text>
                      <NumberInput
                        size="xs"
                        maxW={16}
                        defaultValue={10}
                        min={1}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      <Text>entries</Text>
                    </Flex>
                  </Box>
                  <Box pr="1rem">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text>Search:</Text>
                      <Input />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <TableContainer width="100%">
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Position</Th>
                      <Th>Office</Th>
                      <Th>Age</Th>
                      <Th>Start Date</Th>
                      <Th>Salary</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                    <Tr>
                      <Td>Udin Wayang</Td>
                      <Td>Accountant</Td>
                      <Td>Tokyo</Td>
                      <Td>33</Td>
                      <Td>2008/11/08</Td>
                      <Td>$100</Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Box p="1rem">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Box>
                      <Text>Showing 1 to 10 of 57 entries</Text>
                    </Box>
                    <Box>
                      <Flex>
                        <Box border="1px solid grey" p="0.2rem">
                          <Text>Previous</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>1</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>2</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>3</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>4</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>5</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>6</Text>
                        </Box>
                        <Box border="1px solid grey" color="blue" p="0.2rem">
                          <Text>Next</Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </TableContainer>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Tables;

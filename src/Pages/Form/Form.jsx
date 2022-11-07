import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Home from "../Home/Home";
import { FormControl, FormLabel } from "@chakra-ui/react";

const Form = () => {
  return (
    <Box>
      <Home></Home>
      <Box w="35%" m="auto" boxShadow="base" mt="2rem">
        <Flex>
          <Box p="1rem">
            <Text fontWeight="semi-bold">Basic Info</Text>
          </Box>
        </Flex>

        <Divider />

        <Box p="1rem">
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Box mb="1rem">
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input type="text" placeholder="Enter clients first name" />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input type="text" placeholder="Enter clients last name" />
              </FormControl>
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignItems="flex-start">
            <Box mb="1rem">
              <FormLabel>Mobile number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+254" />
                <Input type="tel" placeholder="Enter clients mobile name" />
              </InputGroup>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter clients email address" />
              </FormControl>
            </Box>
          </Flex>

          <Box mb="1rem">
            <FormLabel>Select Gender</FormLabel>
            <Select placeholder="Gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </Box>

          <Box mb="1rem">
            <FormControl>
              <FormLabel>Date of birth</FormLabel>
              <Input
                placeholder="Select Date of birth"
                size="md"
                type="datetime-local"
              />
            </FormControl>
          </Box>
          <Box mb="1rem">
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input type="number" placeholder="Year" />
            </FormControl>
          </Box>

          <Box>
            <Button colorScheme="blue">Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;

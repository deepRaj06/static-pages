import { Badge, Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Menu, MenuButton } from "@chakra-ui/react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { Progress } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineShoppingCart, AiFillWechat } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <Box
        w="100%"
        boxSizing="border-box"
        paddingTop="2rem"
        paddingLeft="1.4rem"
        paddingRight="1.4rem"
      >
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="24px" fontWeight="semi-bold">
              Dashboard
            </Text>
            <Text fontSize="12px" fontWeight="bold">
              {" "}
              <span style={{ color: "#6600ff" }}>Home</span> / Dashboard
            </Text>
          </Flex>
        </Box>

        <Box marginTop="2rem">
          <Flex justifyContent="space-between" alignItems>
            <Box
              backgroundColor="white"
              borderRadius="6px"
              w="22%"
              textAlign="start"
            >
              <Flex justifyContent="space-between" alignItems="center" p="1rem">
                <Box minW="54%">
                  <Flex flexDirection="column">
                    <Text fontSize="12px">EARNINGS(MONTHLY)</Text>
                    <Text fontWeight="semibold">$40,000</Text>
                    <Box w="100%">
                      <Flex justifyContent="space-between" fontSize="12px">
                        <Box>
                          <Flex>
                            <Text color="green">3.48%</Text>
                            <Icon color="green" as={ArrowUpIcon} w={4} h={4} />
                          </Flex>
                        </Box>
                        <Text>Since last month</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Icon color="blue" as={CalendarIcon} w={6} h={6} />
                </Box>
              </Flex>
            </Box>
            <Box
              backgroundColor="white"
              borderRadius="6px"
              w="22%"
              textAlign="start"
            >
              <Flex justifyContent="space-between" alignItems="center" p="1rem">
                <Box minW="54%">
                  <Flex flexDirection="column">
                    <Text fontSize="12px">EARNINGS(MONTHLY)</Text>
                    <Text fontWeight="semibold">$40,000</Text>
                    <Box w="100%">
                      <Flex justifyContent="space-between" fontSize="12px">
                        <Box>
                          <Flex>
                            <Text color="green">3.48%</Text>
                            <Icon color="green" as={ArrowUpIcon} w={4} h={4} />
                          </Flex>
                        </Box>
                        <Text>Since last month</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Icon color="green" as={AiOutlineShoppingCart} w={6} h={6} />
                </Box>
              </Flex>
            </Box>
            <Box
              backgroundColor="white"
              borderRadius="6px"
              w="22%"
              textAlign="start"
            >
              <Flex justifyContent="space-between" alignItems="center" p="1rem">
                <Box minW="54%">
                  <Flex flexDirection="column">
                    <Text fontSize="12px">EARNINGS(MONTHLY)</Text>
                    <Text fontWeight="semibold">$40,000</Text>
                    <Box w="100%">
                      <Flex justifyContent="space-between" fontSize="12px">
                        <Box>
                          <Flex>
                            <Text color="green">3.48%</Text>
                            <Icon color="green" as={ArrowUpIcon} w={4} h={4} />
                          </Flex>
                        </Box>
                        <Text>Since last month</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Icon color="skyblue" as={BsPeopleFill} w={6} h={6} />
                </Box>
              </Flex>
            </Box>
            <Box
              backgroundColor="white"
              borderRadius="6px"
              w="22%"
              textAlign="start"
            >
              <Flex justifyContent="space-between" alignItems="center" p="1rem">
                <Box minW="54%">
                  <Flex flexDirection="column">
                    <Text fontSize="12px">EARNINGS(MONTHLY)</Text>
                    <Text fontWeight="semibold">$40,000</Text>
                    <Box w="100%">
                      <Flex justifyContent="space-between" fontSize="12px">
                        <Box>
                          <Flex>
                            <Text color="red">3.48%</Text>
                            <Icon color="red" as={ArrowDownIcon} w={4} h={4} />
                          </Flex>
                        </Box>
                        <Text>Since last month</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Icon color="orange" as={AiFillWechat} w={6} h={6} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box marginTop="2rem">
          <Flex justifyContent="space-between">
            <Box
              minW="34%"
              // border="1px solid black"
              backgroundColor="white"
              h="380px"
              p="1rem"
              borderRadius="8px"
            >
              <Box>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Product Sold</Text>
                  <Menu>
                    <MenuButton
                      color="white"
                      backgroundColor="#6600ff"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Month
                    </MenuButton>
                  </Menu>
                </Flex>
              </Box>

              <Box mt="2rem">
                <Stack spacing={4}>
                  <Box>
                    <Flex
                      mb="0.1rem"
                      justifyContent="space-between"
                      alignItems="center"
                      color="grey"
                      fontSize="12px"
                    >
                      <Text>Oblong T-Shirt</Text>
                      <Text>600 of 800 items</Text>
                    </Flex>
                    <Progress
                      borderRadius="8px"
                      colorScheme="orange"
                      size="md"
                      value={80}
                    />
                  </Box>
                  <Box>
                    <Flex
                      mb="0.1rem"
                      justifyContent="space-between"
                      alignItems="center"
                      color="grey"
                      fontSize="12px"
                    >
                      <Text>Oblong T-Shirt</Text>
                      <Text>600 of 800 items</Text>
                    </Flex>
                    <Progress
                      borderRadius="8px"
                      colorScheme="green"
                      size="md"
                      value={70}
                    />
                  </Box>
                  <Box>
                    <Flex
                      mb="0.1rem"
                      justifyContent="space-between"
                      alignItems="center"
                      color="grey"
                      fontSize="12px"
                    >
                      <Text>Oblong T-Shirt</Text>
                      <Text>600 of 800 items</Text>
                    </Flex>
                    <Progress
                      borderRadius="8px"
                      colorScheme="red"
                      size="md"
                      value={50}
                    />
                  </Box>
                  <Box>
                    <Flex
                      mb="0.1rem"
                      justifyContent="space-between"
                      alignItems="center"
                      color="grey"
                      fontSize="12px"
                    >
                      <Text>Oblong T-Shirt</Text>
                      <Text>600 of 800 items</Text>
                    </Flex>
                    <Progress
                      borderRadius="8px"
                      colorScheme="blue"
                      size="md"
                      value={42}
                    />
                  </Box>
                  <Box>
                    <Flex
                      mb="0.1rem"
                      justifyContent="space-between"
                      alignItems="center"
                      color="grey"
                      fontSize="12px"
                    >
                      <Text>Oblong T-Shirt</Text>
                      <Text>600 of 800 items</Text>
                    </Flex>
                    <Progress
                      borderRadius="8px"
                      colorScheme="green"
                      size="md"
                      value={32}
                    />
                  </Box>
                </Stack>
                <Box>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    color="blue"
                    mt="2rem"
                  >
                    <Text>View More</Text>
                    <Icon as={BiChevronRight} w={6} h={6} />
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Box
              minW="64%"
              // border="1px solid black"
              h="400px"
              backgroundColor="white"
              p="1rem"
              borderRadius="8px"
            >
              <Box>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>Invoice</Text>
                  {/* <Icon as={BiChevronRight} w={6} h={6} /> */}
                  <Menu>
                    <MenuButton
                      color="white"
                      backgroundColor="#cc3300"
                      as={Button}
                      rightIcon={<BiChevronRight />}
                    >
                      View More
                    </MenuButton>
                  </Menu>
                </Flex>
              </Box>

              <Box marginTop="2rem">
                <TableContainer>
                  <Table variant="simple" size="sm">
                    <Thead>
                      <Tr>
                        <Th>Order ID</Th>
                        <Th>Customer</Th>
                        <Th>Item</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>RA0449</Td>
                        <Td>Udin Wayang</Td>
                        <Td>Nasi Padang</Td>
                        <Td>
                          <Badge
                            p="0.1rem"
                            borderRadius="6px"
                            backgroundColor="green"
                            color="whitesmoke"
                          >
                            Success
                          </Badge>
                        </Td>
                        <Td>
                          <Button
                            w="50%"
                            h="30px"
                            // colorScheme="blue"
                            color="whitesmoke"
                            backgroundColor="#6600ff"
                          >
                            Detail
                          </Button>
                        </Td>
                      </Tr>

                      <Tr>
                        <Td>RA0449</Td>
                        <Td>Udin Wayang</Td>
                        <Td>Nasi Padang</Td>
                        <Td>
                          <Badge
                            p="0.1rem"
                            borderRadius="6px"
                            backgroundColor="orange"
                            color="whitesmoke"
                          >
                            Success
                          </Badge>
                        </Td>
                        <Td>
                          <Button
                            w="50%"
                            h="30px"
                            backgroundColor="#6600ff"
                            color="whitesmoke"
                          >
                            Detail
                          </Button>
                        </Td>
                      </Tr>

                      <Tr>
                        <Td>RA0449</Td>
                        <Td>Udin Wayang</Td>
                        <Td>Nasi Padang</Td>
                        <Td>
                          <Badge
                            p="0.1rem"
                            borderRadius="6px"
                            backgroundColor="red"
                            color="whitesmoke"
                          >
                            Success
                          </Badge>
                        </Td>
                        <Td>
                          <Button
                            w="50%"
                            h="30px"
                            backgroundColor="#6600ff"
                            color="whitesmoke"
                          >
                            Detail
                          </Button>
                        </Td>
                      </Tr>

                      <Tr>
                        <Td>RA0449</Td>
                        <Td>Udin Wayang</Td>
                        <Td>Nasi Padang</Td>
                        <Td>
                          <Badge
                            p="0.1rem"
                            borderRadius="6px"
                            backgroundColor="blue"
                            color="whitesmoke"
                          >
                            Success
                          </Badge>
                        </Td>
                        <Td>
                          <Button
                            w="50%"
                            h="30px"
                            backgroundColor="#6600ff"
                            color="whitesmoke"
                          >
                            Detail
                          </Button>
                        </Td>
                      </Tr>

                      <Tr>
                        <Td>RA0449</Td>
                        <Td>Udin Wayang</Td>
                        <Td>Nasi Padang</Td>
                        <Td>
                          <Badge
                            p="0.1rem"
                            borderRadius="6px"
                            backgroundColor="green"
                            color="whitesmoke"
                          >
                            Success
                          </Badge>
                        </Td>
                        <Td>
                          <Button
                            w="50%"
                            h="30px"
                            backgroundColor="#6600ff"
                            color="whitesmoke"
                          >
                            Detail
                          </Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

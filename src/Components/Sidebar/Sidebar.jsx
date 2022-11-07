import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Box,
  useDisclosure,
  Flex,
  Text,
  Stack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = ({ widthSide, setWidthNav, setWidthSide }) => {
  const [placement, setPlacement] = React.useState("left");
  let { isOpen, onClose } = useDisclosure();

  if (widthSide === "14%") {
    isOpen = true;
  }

  const handleClose = () => {
    onClose();
    setWidthNav("100%");
    setWidthSide("0%");
  };

  return (
    <>
      <Box w={widthSide}>
        <Drawer placement={placement} onClose={handleClose} isOpen={isOpen}>
          <DrawerContent maxWidth="14%">
            <DrawerHeader
              backgroundColor="#6600ff"
              color="white"
              borderBottomWidth="1px"
            >
              <Link to="/">
                <Text>Dashboard</Text>
              </Link>
            </DrawerHeader>
            <DrawerBody>
              <Box>
                <Flex
                  justifyContent="space-between"
                  alignItems="start"
                  flexDirection="column"
                >
                  <Text color="grey">FEATURES</Text>
                  <Box
                    w="100%"
                    color="grey"
                    fontSize="12px"
                    fontWeight="medium"
                    p="0.6rem"
                    cursor="pointer"
                  >
                    <Stack size={4}>
                      <Box>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text>Bootstrap UI</Text>
                          <Icon as={BiChevronRight} w={6} h={6} />
                        </Flex>
                      </Box>
                      <Box>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text>Forms</Text>
                          <Link to="/form">
                            <Icon as={BiChevronRight} w={6} h={6} />
                          </Link>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text>Tables</Text>
                          <Link to="/table">
                            <Icon as={BiChevronRight} w={6} h={6} />
                          </Link>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text>UI Colors</Text>
                          <Icon as={BiChevronRight} w={6} h={6} />
                        </Flex>
                      </Box>
                    </Stack>
                  </Box>
                </Flex>
              </Box>
              <Divider></Divider>
              <Box>
                <Flex
                  justifyContent="space-between"
                  alignItems="start"
                  flexDirection="column"
                >
                  <Text>EXAMPLES</Text>
                  <Box
                    w="100%"
                    color="grey"
                    fontSize="12px"
                    fontWeight="medium"
                    p="0.6rem"
                    cursor="pointer"
                  >
                    <Stack size={4}>
                      <Box>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text>Pages</Text>
                          <Icon as={BiChevronRight} w={6} h={6} />
                        </Flex>
                      </Box>
                      <Box>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text>Charts</Text>
                          <Icon as={BiChevronRight} w={6} h={6} />
                        </Flex>
                      </Box>
                    </Stack>
                  </Box>
                </Flex>
              </Box>
              <Divider></Divider>
              <Text color="grey" fontSize="12px">
                Version 1.1
              </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;

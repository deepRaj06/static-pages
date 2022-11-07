import React from "react";
import { Box, Button, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { HamburgerIcon, BellIcon } from "@chakra-ui/icons";
import { TbListCheck } from "react-icons/tb";
import { Divider } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import { useLocation } from "react-router-dom";

const Navbar = ({ handleSideBar, widthNav }) => {
  let location = useLocation();

  return (
    <>
      <Box w={widthNav} boxSizing="border-box" backgroundColor="#6600ff">
        <Box w="100%" boxSizing="border-box">
          <Flex p="0.46rem" justifyContent="space-between" alignItems="center">
            <Box>
              <Button
                cursor="pointer"
                color="white"
                onClick={() => handleSideBar()}
                __hover={{ backgroundColor: "#6600ff" }}
                backgroundColor="#6600ff"
                variant="ghost"
                as={IconButton}
                icon={
                  <HamburgerIcon
                    cursor="pointer"
                    __hover={{ backgroundColor: "lightBlue" }}
                  />
                }
              ></Button>
            </Box>
            <Box w="20%">
              <Flex
                color="white"
                justifyContent="space-around"
                alignItems="center"
              >
                <Icon as={BellIcon} w={6} h={6} />
                <Icon as={TbListCheck} w={6} h={6} />
                <Divider orientation="vertical" />
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <Text>Maman Ketoprak</Text>
              </Flex>
            </Box>
          </Flex>

          {location.pathname === "/" || location.pathname === "/dashboard" ? (
            <Box w="100%" h="90.6vh" backgroundColor="whitesmoke">
              <Dashboard />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

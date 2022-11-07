import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const Home = ({ setWidthTable }) => {
  const { onOpen } = useDisclosure();
  const [widthNav, setWidthNav] = useState("100%");
  const [toggle, setToggle] = useState(false);
  const [widthSide, setWidthSide] = useState("0%");

  const handleSideBar = () => {
    setToggle(!toggle);
    if (toggle) {
      setWidthNav("86%");
      setWidthSide("14%");
      setWidthTable("86%");
      onOpen();
    } else {
      setWidthTable("100%");
      setWidthNav("100%");
      setWidthSide("0%");
    }
  };

  return (
    <Box w="100%" backgroundColor="whitesmoke">
      <Flex>
        <Sidebar
          widthSide={widthSide}
          setWidthNav={setWidthNav}
          setWidthSide={setWidthSide}
        />
        <Navbar
          setWidthNav={setWidthNav}
          widthNav={widthNav}
          setToggle={setToggle}
          toggle={toggle}
          handleSideBar={handleSideBar}
        />
      </Flex>
    </Box>
  );
};

export default Home;

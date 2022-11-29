import {
  useColorMode,
  IconButton,
  Box,
  Flex,
  Input,
  Button,
  useToast,
  Container,
  Textarea,
  Text,
  Heading,
} from "@chakra-ui/react";
import { CopyIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import copy from "copy-to-clipboard";
import styles from "./nav.module.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  let [value, setValue] = React.useState("");
  const toast = useToast();

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  let handleUpperCase = () => {
    setValue(value.toUpperCase());
  };
  let handleLowerCase = () => {
    setValue(value.toLowerCase());
  };

  const handleCopy = () => {
    copy(value);

    toast({
      title: `You have copied ${value} `,
      position: "top-right",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  let handleReset = () => {
    setValue("");
    toast({
      title: `You have Reset `,
      position: "top",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleExtraSpaces = () => {
    setValue(value.replace(/\s+/g, " ").trim());
    toast({
      title: `You have Removed Extra Spaces `,
      position: "top",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  return (
    <>
      <Box className={styles.head_nav} p="1" m="auto">
        <Flex justifyContent={"space-between"}>
          <Box>
            <Flex
              alignItems={"center"}
              w="500px"
              justifyContent={"space-between"}>
              <button className={styles.logo_btn}>TextBoard</button>
              <Button bg={"none"} px="4" py="2" borderRadius="5px">
                Home
              </Button>
              <Button bg={"none"} px="4" py="2" borderRadius="5px">
                Created By:- Santosh Yadav
              </Button>
            </Flex>
          </Box>
          <Box>
            <IconButton
              aria-label="toggle theme"
              rounded="full"
              size="md"
              onClick={toggleColorMode}
              icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            />
          </Box>
        </Flex>
      </Box>
      <marquee className={styles.slid_text} direction="right">
        <Heading as="h1" size="lg">
          WELCOM TO TEXTBOARD
        </Heading>
      </marquee>

      <Box mt="30px">
        <Container>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Enter The Text"
            size="lg"
            rows="5"
          />

          <Button
            mr={"10px"}
            onClick={handleUpperCase}
            mt="8px"
            colorScheme="teal"
            variant="solid">
            UpperCase
          </Button>
          <Button
            mr={"10px"}
            onClick={handleLowerCase}
            mt="8px"
            colorScheme="teal"
            variant="solid">
            UpperLower
          </Button>
          <Button
            onClick={handleCopy}
            mt="8px"
            mr="10px"
            colorScheme="teal"
            variant="solid">
            <CopyIcon />
            CopyText
          </Button>

          <Button
            onClick={handleReset}
            mt="8px"
            colorScheme="teal"
            variant="solid">
            <DeleteIcon />
            Reset
          </Button>
          <Button
            onClick={handleExtraSpaces}
            mt="8px"
            colorScheme="teal"
            variant="solid">
            Remove Extra Spaces
          </Button>

          <Text mt="8px">Priview: {value}</Text>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;

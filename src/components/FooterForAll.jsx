import React from "react";
import {
  Container,
  Img,
  Box,
  Text,
  Link,
  Heading,
  Button,
  Flex,
  Stack
} from "@chakra-ui/react";

const FooterForAll = () => {
  return (
    <>
      <Container minW="100%" mt="30px">
        <Box
          mb="30px"
          h="200px"
          borderRadius="8px"
          w="90%"
          m="auto"
          bgColor="#f1f1f1"
          p="20px"
          textAlign="center"
        >
          <Text fontSize="25px" color="#ff9400">
            Get Started on Mobile
          </Text>

          <Flex>
            <Link bgColor="#f1f1f1">
              <Img
                w="200px"
                ml="200px"
                src="https://assets.loseit.com/website/home/Download_Apple.svg"
              />
            </Link>
            <Link bgColor="#f1f1f1">
              {" "}
              <Img
                w="200px"
                ml="100px"
                src="https://assets.loseit.com/website/home/Download_GooglePlay.svg"
              />
            </Link>
          </Flex>
        </Box>
        <Flex
          mt="30px"
          bgColor="#183962"
          w="90%"
          m="auto"
          h="400px"
          borderRadius="8px"
        >
          <Box>
            <Img
              w="150px"
              mt="40px"
              ml="100px"
              src="https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg"
            />
          </Box>
          <Stack>
            <Link mb="-20px" color="white ">
              About
            </Link>
            <Link mb="-20px" color="white ">
              Contact Us
            </Link>
            <Link mb="-20px" color="white ">
              Careers
            </Link>
            <Link mb="-20px" color="white ">
              Press & Media Kit
            </Link>
            <Flex>
              <Img
                borderRadius="50%"
                ml="10px"
                w="50px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
              />
              <Img
                borderRadius="50%"
                ml="10px"
                w="50px"
                src="data:image/jpeg;base64,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"
              />
              <Img
                borderRadius="50%"
                ml="10px"
                w="50px"
                src="data:image/png;base64,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"
              />
              <Img
                borderRadius="50%"
                ml="10px"
                w="50px"
                src="data:image/png;base64,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"
              />
              <Img
                borderRadius="50%"
                ml="10px"
                w="50px"
                src="data:image/png;base64,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"
              />
            </Flex>
            <Text color="white">
              Copyright 2008-2021 FitNow, Inc, All Rights Reserved
            </Text>
            <Text color="#ff9400">Privacy | Terms of Service</Text>
          </Stack>
          <Stack ml="100px">
            <Link mb="-20px" color="white ">
              Premium
            </Link>
            <Link mb="-20px" color="white ">
              Partners/API
            </Link>
            <Link mb="-20px" color="white ">
              Get Lose It
            </Link>
            <Link mb="-20px" color="white ">
              FAQ
            </Link>
            <Img
              w="50px"
              ml="50px"
              src="https://cdn.userway.org/widgetapp/images/body_wh.svg"
            />
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default FooterForAll;

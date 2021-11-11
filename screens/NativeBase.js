import * as React from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from "native-base";

export default function NativeBase() {
  return (
    <NativeBaseProvider>
      <Box
        bg="secondary.600"
        py={5}
        px={5}
        rounded="md"
        width={"100%"}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between" borderWidth={3}>
          <Box justifyContent="space-between" borderWidth={1}>
            <VStack space={2}>
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="lg">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable
              rounded="sm"
              bg="primary.400"
              alignSelf="flex-start"
              py={2}
              px={3}
            >
              <Text
                textTransform="uppercase"
                fontSize={"sm"}
                fontWeight="bold"
                color="white"
              >
                Remind me
              </Text>
            </Pressable>
          </Box>
          <Image
            source={{
              uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
            }}
            alt="Aang flying and surrounded by clouds"
            height={100}
            rounded="full"
            width={100}
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

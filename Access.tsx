import React from "react";
import {
  NativeBaseProvider,
  Box,
  Heading,
  Button,
  Progress,
  Stack,
} from "native-base";
import { StyleSheet, Image, ImageBackground } from "react-native";

function Access() {
  return (
    <NativeBaseProvider>
      <Box flex="1">
        <Image resizeMode="contain" source={require("./assets/bygning.jpeg")}></Image>
        <Image source={require("./assets/K14-logo-hvit.svg")}></Image>
      </Box>

      <Box flex="1" backgroundColor="white" alignItems="center">
        <Box p="1" py="10" w="80%">
          <Heading
            alignItems="center"
            size="3xl"
            fontWeight="700"
            color="coolGray.800"
          >
            Tilgang
          </Heading>

          <Heading
            mt="5"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="md"
          >
            Vennligst velg ønsket tilgang.
          </Heading>

          <Stack direction={{base: "column",md: "row"}} space={4} mt="10">
            <Button size="sm" variant="outline" colorScheme="emerald">
              Gjest
            </Button>
            <Button size="sm" variant="outline" colorScheme="emerald">
              Ansatt
            </Button>
          </Stack>

            <Button py="5" mt="10" colorScheme="emerald" size="lg">
              Videre
            </Button>
        </Box>
      </Box>
      <Box w="100%">
        <Progress colorScheme="emerald" value={80} size="sm" mx="4" />
      </Box>
    </NativeBaseProvider>
  );
}


export default Access;

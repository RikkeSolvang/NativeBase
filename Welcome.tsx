import React from "react";
import {
  NativeBaseProvider,
  Box,
  Heading,
  Button,
  VStack,
  Progress,
} from "native-base";
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";

import styles from "./styles";

function Welcome() {
  return (
    <NativeBaseProvider>
      <Box style={styles.backgroundImage}>
        <Image source={require("./assets/bygning.jpeg")}></Image>
      </Box>

      <Box style={styles.background2}>
        <Box p="1" py="10" w="80%">
          <Heading
            alignItems="center"
            size="3xl"
            fontWeight="700"
            color="coolGray.800"
          >
            Velkommen
          </Heading>

          <Heading mt="5" color="coolGray.600" fontWeight="medium" size="md">
            For å benytte deg av appen og få mest mulig ut av byggets
            fasiliteter, må du enten registrere deg eller logge inn.
          </Heading>
        </Box>
        <Box>
          <VStack space={3} mt="2">
            <Button py="5" mt="2" colorScheme='pink' size="lg">
              Logg inn
            </Button>

            <Button py="5" mt="2" colorScheme="emerald" size="lg">
              Opprett ny bruker
            </Button>
          </VStack>
        </Box>
      </Box>
      <Box w="100%">
        <Progress colorScheme="green" value={20} size="sm" mx="4" />
      </Box>
    </NativeBaseProvider>
  );
}

export default Welcome;

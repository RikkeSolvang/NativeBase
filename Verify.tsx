import React from "react";
import { NativeBaseProvider, Box, Heading, Button, VStack, Progress, FormControl, Input } from "native-base";
import { StyleSheet, Image } from "react-native";

function Verify() {
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
            Verifisering
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
            Vennligst fyll inn ditt mobilnummer for å motta SMS med verifiseringskode.
          </Heading>

          <VStack space={3} mt="10">

            <FormControl>
              <Input size="2xl" placeholder="Tast inn ditt telefonnummer" variant="rounded"/>
            </FormControl>

              <Button py="5" mt="2" colorScheme="emerald" size="lg">
                Videre
              </Button>
          </VStack>
      </Box>

        </Box>
          <Box w="100%">
            <Progress colorScheme="emerald" value={40} size="sm" mx="4" />
          </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    resizeMode: "contain",
  },
  background2: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
});

export default Verify;
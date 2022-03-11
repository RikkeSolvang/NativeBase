import React from "react";
import {
  NativeBaseProvider,
  Box,
  Heading,
  Button,
  VStack,
  Progress,
  FormControl,
  Input,
} from "native-base";
import { StyleSheet, Image } from "react-native";
import Access from "./Access";

function SMSCode() {

  const styles = StyleSheet.create({
    backgroundImage: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      width: "100%", 
      height: 50
    },
    background2: {
      backgroundColor: "white",
      flex: 1,
      alignItems: "center",
    },
  });

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
            Kode fra SMS
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
            Vennligst fyll inn verifiseringskoden du mottok på SMS{" "}
          </Heading>

          <VStack space={3} mt="10">
            <FormControl>
              <Input size="2xl" placeholder="Tast inn verifiseringskode..." variant="rounded" />
            </FormControl>

            <Button py="5" mt="2" colorScheme="emerald" size="lg"
            onPress={Access}>
              Videre
            </Button>
          </VStack>
        </Box>
      </Box>
      <Box w="100%">
        <Progress colorScheme="emerald" value={60} size="sm" mx="4" />
      </Box>
    </NativeBaseProvider>
  );
}



export default SMSCode;

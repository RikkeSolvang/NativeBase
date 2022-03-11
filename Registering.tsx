import React from "react";
import {
  NativeBaseProvider,
  Box,
  Heading,
  Button,
  Progress,
  Stack,
  FormControl,
  VStack,
  Input,
} from "native-base";
import { StyleSheet, Image, ImageBackground } from "react-native";


function Registering() {
  return (
    <NativeBaseProvider>
        <Box flex="1">
            <Image
            resizeMode="contain"
            source={require("./assets/bygning.jpeg")}
            ></Image>
        </Box>

            <Box flex="3" backgroundColor="white" alignItems="center">
                    <Box p="2" py="7" w="80%">
                        <Heading
                            alignItems="center"
                            size="2xl"
                            fontWeight="700"
                            color="coolGray.800"
                        >
                            Registrer bruker
                        </Heading>

                        <VStack space={2} mt="5">
                            <FormControl>
                                <FormControl.Label>Fornavn</FormControl.Label>
                                <Input variant="rounded" size="lg" />
                            </FormControl>

                            <FormControl>
                                <FormControl.Label>Etternavn</FormControl.Label>
                                <Input variant="rounded" size="lg" />
                            </FormControl>

                            <FormControl>
                                <FormControl.Label>Mobilnummer</FormControl.Label>
                                <Input
                                    variant="filled"
                                    type="number"
                                    value="97059700"
                                    size="lg"
                                />
                            </FormControl>

                            <FormControl>
                                <FormControl.Label>E-post adresse</FormControl.Label>
                                <Input variant="rounded" size="lg" type="email"/>
                            </FormControl>

                            <FormControl>
                                <FormControl.Label>Bedriftskode</FormControl.Label>
                                <Input variant="rounded" size="lg" />
                            </FormControl>

                            <FormControl>
                                <FormControl.Label>Passord</FormControl.Label>
                                <Input variant="rounded" type="password" size="lg" />
                            </FormControl>

                            <FormControl>
                                <FormControl.Label>Gjenta passord</FormControl.Label>
                                <Input variant="rounded" type="password" size="lg" />
                            </FormControl>

                            <Button py="5" mt="5" colorScheme="emerald" size="sm" justifyContent='center' >
                            Videre
                            </Button>
                        </VStack>
                </Box>
        </Box>
        <Box w="100%">
            <Progress colorScheme="emerald" value={100} size="sm" mx="4" />
          </Box>
    </NativeBaseProvider>
  );
}

export default Registering;

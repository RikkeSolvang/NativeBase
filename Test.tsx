import { DiagonalContainer } from 'react-diagonal-container';


import React from 'react';
import { NativeBaseProvider, Box, Progress, View } from 'native-base';
import {Button} from 'react-native'

function Test() {
    return (
        <View justifyContent='center' alignItems='center'>
        <Button
        onPress={() => console.log("Button pressed")}
        title="Trykk her!"
        color="#6495ed"
      />
      </View>
    )}


export default Test;

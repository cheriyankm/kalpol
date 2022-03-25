import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Box, Center, Heading, Text, Container, ScrollView, HStack, Flex, Divider, Button, Input, Stack, Image, VStack } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  return (
    <NativeBaseProvider>
      <Stack space={3} alignItems="center" m="3%" maxW="100%">
        <HStack space={3} alignItems="center" maxW="100%">
          <VStack space={8} maxW="100%">
            <Input variant="filled" placeholder="Your Name" />
            <Input variant="filled" placeholder="Room name(Optional)" />
            <Button onPress={() => console.log("Create room")}>Create room</Button>
          </VStack>
          <Divider my={2} orientation="vertical" />
          <VStack space={8} maxW="100%">
            <Input variant="filled" placeholder="Your Name" />
            <Input variant="filled" placeholder="Room id" />
            <Button onPress={() => console.log(name)}>Join room</Button>
          </VStack>
        </HStack>
      </Stack>
    </NativeBaseProvider>
  );
}

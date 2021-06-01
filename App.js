import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inicial from './componentes/Inicial';
import AdicionaItens  from './componentes/AdicionaItens';
import ListaItens from './componentes/ListaItens';

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicial" component={Inicial}/>
                <Stack.Screen name="AdicionaItens" component={AdicionaItens}/>
                <Stack.Screen name="ListaItens" component={ListaItens}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

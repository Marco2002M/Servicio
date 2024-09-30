import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import FormLogin from './Forms/FormLogin.js'; // Usa el nombre correcto del archivo
import FormSingUp from './Forms/FormSignUp';
import FormHome from './Forms/FormHome';
import FormProfile from './Forms/FormProfile';
import FormDiccionario from './Forms/FormDiccionario';
import FormStories from './Forms/FormStories';
import FormMedals from './Forms/FormMedals';
import FormHelp from './Forms/FormHelp';
import FormLevel1 from './Forms/FormLevel1';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/mapache bienvenida.png')} style={styles.imagen} />
      <Text style={styles.titulo}>El arte de hablar bien</Text>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('FormSignUp')}
      >
        <Text style={styles.textoBoton}>Empezar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.boton2}
        onPress={() => navigation.navigate('FormLogin')}
      >
        <Text style={styles.textoBoton}>Ya tengo una cuenta</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (


    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FormLogin"
          component={FormLogin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FormSignUp"
          component={FormSingUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FormHome"
          component={FormHome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="FormProfile"
          component={FormProfile}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="FormDiccionario"
          component={FormDiccionario}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="FormStories"
          component={FormStories}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="FormMedals"
          component={FormMedals}
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="FormHelp"
          component={FormHelp}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="FormL1"
          component={FormLevel1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>




  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 60,
    marginBottom: 220,
  },
  imagen: {
    width: 300,
    height: 300,
  },
  boton: {
    backgroundColor: '#1E90FF',
    padding: 13,
    paddingHorizontal: 103,
    borderRadius: 10,
    marginTop: 15,
  },
  boton2: {
    backgroundColor: '#1E90FF',
    padding: 13,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 15,
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

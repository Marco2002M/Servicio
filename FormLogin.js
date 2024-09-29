import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import UserService from './Services/UserService'; // Asegúrate de importar el servicio correctamente

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCredentials = { email, password };
      const response = await UserService.login(userCredentials);
      Alert.alert('Éxito', 'Inicio de sesión exitoso');
      navigation.navigate('FormHome'); // Navega a FormHome después de iniciar sesión
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Error', 'Correo o contraseña incorrectos');
      } else {
        Alert.alert('Error', 'Ocurrió un error al iniciar sesión');
      }
    }
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido de nuevo</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeIcon}>
          <FontAwesome
            name={secureTextEntry ? 'eye-slash' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.orText}>O</Text>

      <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
        <FontAwesome name="google" size={24} color="white" style={styles.icon} />
        <Text style={styles.socialButtonText}>Registrarse con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <FontAwesome name="facebook" size={24} color="white" style={styles.icon} />
        <Text style={styles.socialButtonText}>Registrarse con Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  inputPassword: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    color: '#999',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 15, // Ajusta la posición del texto respecto al icono
  },
  icon: {
    position: 'absolute',
    left: 25, // Ajusta el valor para mover el icono más a la derecha
  },
});


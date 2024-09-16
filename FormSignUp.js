import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function FormSignUp() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const handleContinue = () => {
    if (step === 1 && name.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa tu nombre.');
      return;
    }
    if (step === 2 && age.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa tu edad.');
      return;
    }
    if (step === 3 && !email.endsWith('@gmail.com') && !email.endsWith('@outlook.com')) {
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico con el dominio @gmail.com o @outlook.com');
      return;
    }
    if (step === 4 && password.trim() === '') {
      Alert.alert('Error', 'Por favor, ingresa tu contraseña.');
      return;
    }
    // Validaciones adicionales para la contraseña
    if (step === 4 && !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      Alert.alert('Error', 'La contraseña debe incluir al menos un carácter especial.');
      return;
    }
    if (step === 4 && /([0-9])\1{1,}/.test(password)) {
      Alert.alert('Error', 'La contraseña no puede contener números consecutivos.');
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      navigation.navigate('FormHome'); // Navega a FormHome después de completar el formulario
    }
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  const progress = step / 4;

  const stepTexts = {
    1: "¿Cómo te llamas?",
    2: "¿Cuál es tu edad?",
    3: "¿Cuál es tu correo electrónico?",
    4: "Crea una contraseña",
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.titulo}>Crea tu perfil</Text>
      <Text style={styles.subtitulo2}>{stepTexts[step]}</Text>

      {step === 1 && (
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
          keyboardType="default"
          autoCapitalize="none"
        />
      )}

      {step === 2 && (
        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          autoCapitalize="none"
        />
      )}

      {step === 3 && (
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      )}

      {step === 4 && (
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
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
      )}

      <TouchableOpacity onPress={handleContinue} style={styles.boton2}>
        <Text style={styles.textoBoton}>Continuar</Text>
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
  titulo: {
    fontSize: 40,
    marginBottom: 25,
  },
  subtitulo2: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0df',
    borderRadius: 10,
    marginVertical: 20,
    position: 'absolute',
    top: 40,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1E90FF',
    borderRadius: 10,
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
  },
  showButton: {
    paddingHorizontal: 10,
  },
  showButtonText: {
    color: '#1E90FF',
    fontSize: 16,
  },
  boton2: {
    backgroundColor: '#1E90FF',
    padding: 13,
    paddingHorizontal: 103,
    borderRadius: 10,
    marginTop: 20,
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }, 
  eyeIcon: {
    padding: 10,
  },
  
});

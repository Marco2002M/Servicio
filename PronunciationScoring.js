import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import * as tfReactNative from '@tensorflow/tfjs-react-native'; // Importa TensorFlow para React Native
import * as speechCommands from '@tensorflow-models/speech-commands'; 
import { Audio } from 'expo-av'; // Necesario para el audio en React Native

// URL del modelo de Teachable Machine
const MODEL_URL = 'https://teachablemachine.withgoogle.com/models/nWkd4fEIsO/';

const PronunciationScoring = () => {
  const [recognizer, setRecognizer] = useState(null);
  const [labels, setLabels] = useState([]);
  const [scores, setScores] = useState([]);
  const [isListening, setIsListening] = useState(false); // Estado para saber si está escuchando

  // Inicializar TensorFlow en React Native
  const initializeTensorFlow = async () => {
    await tfReactNative.ready();
    console.log('TensorFlow ready');
    await createModel();
  };

  // Crear y cargar el modelo
  const createModel = async () => {
    const checkpointURL = MODEL_URL + 'model.json';
    const metadataURL = MODEL_URL + 'metadata.json';

    const recognizer = await speechCommands.create(
      'BROWSER_FFT',
      undefined,
      checkpointURL,
      metadataURL
    );

    await recognizer.ensureModelLoaded();
    setRecognizer(recognizer);
    setLabels(recognizer.wordLabels());
  };

  // Función que empieza el reconocimiento de audio
  const startListening = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso de audio denegado');
      return;
    }

    if (recognizer) {
      setIsListening(true); // Actualizar estado al iniciar la escucha
      recognizer.listen(
        (result) => {
          const newScores = result.scores.map((score, i) => ({
            label: labels[i],
            score: score.toFixed(2),
          }));
          setScores(newScores);
        },
        {
          includeSpectrogram: true,
          probabilityThreshold: 0.75,
          invokeCallbackOnNoiseAndUnknown: true,
          overlapFactor: 0.5,
        }
      );

      // Detener el reconocimiento en 5 segundos
      setTimeout(() => {
        recognizer.stopListening();
        setIsListening(false); // Actualizar estado al detener la escucha
      }, 5000);
    }
  };

  // Cargar el modelo cuando se monta el componente
  useEffect(() => {
    initializeTensorFlow();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginBottom: 20 }}>Teachable Machine Audio Model</Text>
      <Button title={isListening ? "Listening..." : "Start Pronunciation Scoring"} onPress={startListening} disabled={isListening} />
      <View style={{ marginTop: 20 }}>
        {scores.map((score, index) => (
          <Text key={index}>
            {score.label}: {score.score}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PronunciationScoring;

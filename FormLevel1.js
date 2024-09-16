import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ProgressBarAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

export default function FormLevel1() {
    const [step, setStep] = useState(1);
    const [recording, setRecording] = useState(null);
    const [showImage, setShowImage] = useState(false);
    const navigation = useNavigation();

    const navigateToProfile = () => {
        navigation.navigate('FormProfile');
    };

    const navigateToDiccionario = () => {
        navigation.navigate('FormDiccionario');
    };

    const navigateToMedals = () => {
        navigation.navigate('FormMedals');
    };

    const navigateToStories = () => {
        navigation.navigate('FormStories');
    };

    const navigateToHelp = () => {
        navigation.navigate('FormHelp');
    };

    const startRecording = async () => {
        try {
            const permission = await Audio.requestPermissionsAsync();
            if (permission.status === 'granted') {
                if (recording) {
                    await recording.stopAndUnloadAsync();
                    setRecording(null);
                }
                const newRecording = new Audio.Recording();
                await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
                await newRecording.startAsync();
                setRecording(newRecording);
                setShowImage(true);
            } else {
                console.error('Permission to access microphone was denied');
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    };

    const handleContinue = async () => {
        if (step === 2) {
            await startRecording();
        }
        setStep(step + 1);
    };

    const handleLongPress = () => {
        Alert.alert(
            "Añadir al diccionario",
            "¿Deseas añadir la letra Ñ al diccionario?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Añadir", onPress: () => console.log("Letra añadida al diccionario") }
            ]
        );
    };

    const stopRecording = async () => {
        if (recording) {
            await recording.stopAndUnloadAsync();
            setRecording(null);
            setShowImage(false);
        }
    };

    const progress = step / 3;

    return (
        <View style={styles.container}>
            <View style={styles.topIconsContainer}>
                <TouchableOpacity onPress={navigateToHelp}>
                    <Image source={require('./images/iconos/mapachin.png')} style={styles.topIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateToProfile}>
                    <Image source={require('./images/iconos/perfil.png')} style={styles.topIcon} />
                </TouchableOpacity>
            </View>

            <ProgressBarAndroid 
                style={styles.progressBar} 
                styleAttr="Horizontal" 
                indeterminate={false} 
                progress={progress} 
                color="#007BFF"
            />

            <View style={styles.contentContainer}>
                {step === 1 && (
                    <View>
                        <Image source={require('./images/iconos/c.gif')} style={styles.image} />
                        <Text style={styles.title}>Consejos para pronunciar la letra Ñ</Text>
                        <Text style={styles.text}>
                            La letra "Ñ" se pronuncia como una combinación de la "n" y la "y" en palabras como niño o "caña". 
                            Para lograr una pronunciación correcta, intenta colocar la lengua en el paladar y dejar que el aire 
                            pase por la nariz mientras hablas. Practicar con palabras que contienen la "Ñ" te ayudará a mejorar 
                            tu pronunciación.
                        </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                                <Text style={styles.continueButtonText}>Continuar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {step === 2 && (
                    <View style={styles.nextContentContainer}>
                        <Text style={styles.title}>Ahora es tu turno</Text>
                        <Text style={styles.text}>
                            Pronuncia la letra ñ
                        </Text>
                        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                            <Text style={styles.continueButtonText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {step === 3 && (
                    <View style={styles.nextContentContainer}>
                        <Text style={styles.title2}>Lee la oracion </Text>
                        <Text style={styles.text2}>
                            El
                            <Text 
                                style={styles.highlightedText} 
                                onLongPress={handleLongPress}
                            >
                                {" niño "}
                            </Text>
                            come pastel.
                        </Text>
                        <TouchableOpacity style={styles.continueButton2} onPress={() => alert('¡Bien hecho!')}>
                            <Text style={styles.continueButtonText}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {showImage && (
                    <Image source={require('./images/iconos/mic.gif')} style={styles.recordingImage} />
                )}
            </View>

            <View style={styles.iconBorder}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('FormHome')}>
                        <View style={styles.iconWrapper}>
                            <Image source={require('./images/iconos/inicio.png')} style={styles.icon} />
                            <Text style={styles.iconText}>Inicio</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToDiccionario}>
                        <View style={styles.iconWrapper}>
                            <Image source={require('./images/iconos/libro.png')} style={styles.icon} />
                            <Text style={styles.iconText}>Diccionario</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToMedals}>
                        <View style={styles.iconWrapper}>
                            <Image source={require('./images/iconos/logros.png')} style={styles.icon} />
                            <Text style={styles.iconText}>Logros</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToStories}>
                        <View style={styles.iconWrapper}>
                            <Image source={require('./images/iconos/cuentos.png')} style={styles.icon} />
                            <Text style={styles.iconText}>Cuentos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topIconsContainer: {
        position: 'absolute',
        top: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        zIndex: 1,
    },
    topIcon: {
        width: 40,
        height: 40,
    },
    progressBar: {
        marginTop: 120,
        height: 16,
        width: '90%',
        alignSelf: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 60,
        paddingBottom: 100,
    },
    nextContentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        left: 85,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    title2: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        top: 10,
        right: 100,  
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        lineHeight: 24,
        marginBottom: 20,
    },
    text2: {
        fontSize: 18,
        textAlign: 'center',
        color: '#555',
        flex: 1,
        top: -155,
        right: 101, 
        
    },
    highlightedText: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    continueButton: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#007BFF',
        borderRadius: 10,
    },
    continueButton2: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#007BFF',
        borderRadius: 10,
         marginTop: 30,
         top: -8,
        
    },
    continueButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconBorder: {
        position: 'absolute',
        bottom: 20,
        width: '85%',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        padding: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    iconWrapper: {
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconText: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
    },
    recordingImage: {
        width: 150,
        height: 150,
        marginTop: -20,
        top: -310,
    },
});

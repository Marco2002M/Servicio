import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WordService from '../Services/WordService'; // Asegúrate de ajustar la ruta según tu estructura

export default function FormDiccionario() {
    const navigation = useNavigation();
    const [word, setWord] = useState(''); // Estado para almacenar la palabra

    // Función para obtener la palabra desde la API
    const fetchWord = async () => {
        try {
            const response = await WordService.findAll(); // Suponiendo que este método retorna un array de palabras
            if (response.data.length > 0) {
                setWord(response.data[0].word); // Cambia según cómo esté estructurada tu respuesta
            } else {
                Alert.alert("No se encontraron palabras.");
            }
        } catch (error) {
            console.error("Error al obtener la palabra:", error);
            Alert.alert("Error al obtener la palabra");
        }
    };

    // Llamar a la función fetchWord cuando el componente se monta
    useEffect(() => {
        fetchWord();
    }, []);

    const navigateToHome = () => {
        navigation.navigate('FormHome');
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

    const navigateToProfile = () => {
        navigation.navigate('FormProfile');
    };

    const navigateToHelp = () => {
        navigation.navigate('FormHelp');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topIconsContainer}>
                <TouchableOpacity onPress={navigateToHelp}>
                    <Image source={require('../images/iconos/mapachin.png')} style={styles.topIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToProfile}>
                    <Image source={require('../images/iconos/perfil.png')} style={styles.topIcon} />
                </TouchableOpacity>
            </View>

            {/* Muestra la palabra obtenida en la parte superior izquierda */}
            <View style={styles.wordContainer}>
                <Text style={styles.wordText}>{word || "Cargando..."}</Text>
            </View>

            <View style={styles.iconBorder}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={navigateToHome}>
                        <View style={styles.iconWrapper}>
                            <Image source={require('../images/iconos/inicio.png')} style={styles.icon} />
                            <Text style={styles.iconText}>Inicio</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToDiccionario}>
                        <View style={styles.iconWrapper}>
                            <Image source={require('../images/iconos/libro.png')} style={styles.icon} />
                            <Text style={styles.iconText}>Diccionario</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToMedals}>
                        <View style={styles.iconWrapper}>
                            <Image source={require('../images/iconos/logros.png')} style={styles.icon} />
                            <Text style={styles.iconText}>Logros</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToStories}>
                        <View style={styles.iconWrapper}>
                            <Image source={require('../images/iconos/cuentos.png')} style={styles.icon} />
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
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    topIconsContainer: {
        position: 'absolute',
        top: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    topIcon: {
        width: 40,
        height: 40,
    },
    iconBorder: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        alignItems: 'center',
        borderColor: '#ced4da',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Para Android
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
        color: '#495057',
        marginTop: 5,
    },
    wordContainer: {
        position: 'absolute', // Cambiado a absoluto para posicionar en la parte superior izquierda
        top: 180, // Espaciado desde la parte superior
        left: 50, // Espaciado desde la izquierda
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ced4da',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Para Android
    },
    wordText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#343a40',
        textAlign: 'center',
    },
});
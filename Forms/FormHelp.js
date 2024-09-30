import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons

export default function FormHelp() {
    const navigation = useNavigation();
    const [activeQuestion, setActiveQuestion] = useState(null);

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

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../images/mapache bienvenida.png')} style={styles.imagen} />
            <Text style={styles.imageText}>Bienvenido a la aplicación!</Text>

            <View style={styles.topIconsContainer}>
                <TouchableOpacity onPress={navigateToProfile}>
                    <Image source={require('../images/iconos/mapachin.png')} style={styles.topIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateToProfile}>
                    <Image source={require('../images/iconos/perfil.png')} style={styles.topIcon} />
                </TouchableOpacity>
            </View>

            <Text style={styles.faqTitle}>Preguntas Frecuentes</Text>

            <View style={styles.faqContainer}>
                <TouchableOpacity style={styles.questionContainer} onPress={() => toggleQuestion(0)}>
                    <View style={styles.questionContent}>
                        <Text style={styles.questionText}>¿Cómo puedo usar la aplicación?</Text>
                        <Ionicons name="chevron-down" size={24} color="#333" />
                    </View>
                    {activeQuestion === 0 && (
                        <Text style={styles.answerText}>
                            Puedes usar la aplicación navegando a través de las diferentes secciones utilizando los botones en la parte inferior de la pantalla.
                        </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.questionContainer} onPress={() => toggleQuestion(1)}>
                    <View style={styles.questionContent}>
                        <Text style={styles.questionText}>¿Dónde puedo encontrar los logros?</Text>
                        <Ionicons name="chevron-down" size={24} color="#333" />
                    </View>
                    {activeQuestion === 1 && (
                        <Text style={styles.answerText}>
                            Los logros se pueden encontrar en la sección "Logros", accesible desde el menú principal.
                        </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.questionContainer} onPress={() => toggleQuestion(2)}>
                    <View style={styles.questionContent}>
                        <Text style={styles.questionText}>¿Cómo puedo cambiar mi perfil?</Text>
                        <Ionicons name="chevron-down" size={24} color="#333" />
                    </View>
                    {activeQuestion === 2 && (
                        <Text style={styles.answerText}>
                            Para cambiar tu perfil, navega a la sección "Perfil" y selecciona las opciones de edición.
                        </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.questionContainer} onPress={() => toggleQuestion(3)}>
                    <View style={styles.questionContent}>
                        <Text style={styles.questionText}>¿Cómo puedo restablecer mi contraseña?</Text>
                        <Ionicons name="chevron-down" size={24} color="#333" />
                    </View>
                    {activeQuestion === 3 && (
                        <Text style={styles.answerText}>
                            Para restablecer tu contraseña, ve a la pantalla de inicio de sesión y selecciona "¿Olvidaste tu contraseña?".
                        </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.questionContainer} onPress={() => toggleQuestion(4)}>
                    <View style={styles.questionContent}>
                        <Text style={styles.questionText}>¿Cómo contacto al soporte técnico?</Text>
                        <Ionicons name="chevron-down" size={24} color="#333" />
                    </View>
                    {activeQuestion === 4 && (
                        <Text style={styles.answerText}>
                            Puedes contactar al soporte técnico a través del formulario en la sección "Ayuda" o enviando un correo a soporte@aplicacion.com.
                        </Text>
                    )}
                </TouchableOpacity>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
    },
    faqTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#4A90E2',
    },
    faqContainer: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    questionContainer: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#F9F9F9',
    },
    questionContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    answerText: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        paddingLeft: 10,
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
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#E6E6E6',
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
    imagen: {
        width: 150,
        height: 150,
        position: 'relative',
        top: -200,
        right: 120,
    },
});

import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormMedals() {
    const navigation = useNavigation();

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
    const showAlert = (message) => {
        Alert.alert("¡Mensaje!", message);
    };

    return (
        <View style={styles.container}>
<Text style={styles.titulo}>Logros</Text>
            {/* Iconos en las esquinas superiores */}
            <View style={styles.topIconsContainer}>
                <TouchableOpacity onPress={() => showAlert("Mensaje del Icono Superior Izquierdo")}>
                    <Image source={require('../images/iconos/mapachin.png')} style={styles.topIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateToProfile}>
                    <Image source={require('../images/iconos/perfil.png')} style={styles.topIcon} />
                </TouchableOpacity>
            </View>



            {/* Iconos en la parte inferior */}
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    texto: {
        fontSize: 25,
    },
    topIconsContainer: {
        position: 'absolute',
        top: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20, // Adjust padding as needed
    },
    topIcon: {
        width: 40, // Adjust size as needed
        height: 40, // Adjust size as needed
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
        height: '50%', // Adjust height as needed
    },
    box: {
        width: 100, // Adjust size as needed
        height: 100, // Adjust size as needed
        backgroundColor: 'lightblue', // Adjust background color as needed
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10, // Rounded corners, adjust as needed
    },
    boxText: {
        fontSize: 16,
        color: 'black',
    },
    iconBorder: {
        position: 'absolute',
        bottom: 20,
        width: '90%', // Adjust width as needed
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10, // Rounded corners, adjust as needed
        backgroundColor: 'lightgray', // Optional: background color for better visibility
        padding: 10, // Padding inside the border
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
        width: 30, // Increased size
        height: 30, // Increased size
    },
    iconText: {
        fontSize: 14, // Optional: adjust text size if needed
        color: 'black',
        marginTop: 5,
    },
});

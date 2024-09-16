import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function FormProfile() {

    const navigation = useNavigation();

    const handleSignOut = () => {
        Alert.alert('Cerrar sesión', '¿Seguro que quieres cerrar sesión?');
    };

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



    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Mi Perfil</Text>
            
            <Image
                source={require('./images/iconos/perfil.png')} // Asegúrate de que la ruta y el nombre del archivo sean correctos
                style={styles.profileImage}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Nombre: John Doe</Text>
                <Text style={styles.infoText}>Correo Electrónico: john.doe@example.com</Text>
                <Text style={styles.infoText}>Edad: 25</Text>
                <Text style={styles.infoText}>Contraseña: ********</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonCerrar} onPress={handleSignOut}>
                    <Text style={styles.buttonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.iconBorder}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={navigateToHome}>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },titulo: {
        fontSize: 60,
        top: -70
      },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 90,
    },
    infoContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
        color: 'black',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },

    buttonCerrar: {
        backgroundColor: '#b63535',
        paddingVertical: 13,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },iconBorder: {
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

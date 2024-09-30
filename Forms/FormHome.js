import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function FormHome() {
    const navigation = useNavigation();
    const route = useRoute(); // Para obtener los parámetros pasados por navegación
    const [userId, setUserId] = useState(null);

    // Obtener el ID del usuario desde los parámetros de la ruta
    useEffect(() => {
        if (route.params && route.params.userId) {
            setUserId(route.params.userId); // Asignar el ID del usuario
        }
    }, [route.params]);

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

    const navigateToMission = (missionNumber) => {
        navigation.navigate('FormL1');
    };

    const [pressedBoxes, setPressedBoxes] = useState([]);

    const handlePress = (missionNumber) => {
        if (pressedBoxes.includes(missionNumber)) {
            Alert.alert(
                "¿Reintentar misión?",
                "Esta misión ya ha sido completada. ¿Deseas intentar realizarla de nuevo?",
                [
                    { text: "Cancelar", style: "cancel" },
                    { text: "Sí", onPress: () => navigateToMission(missionNumber) }
                ]
            );
        } else {
            setPressedBoxes([...pressedBoxes, missionNumber]);
            navigateToMission(missionNumber);
        }
    };

    const renderBlockGroup = (start, end, letter) => (
        <View style={styles.groupContainer}>
            <View style={styles.boxContainer}>
                {Array.from({ length: end - start + 1 }, (_, index) => {
                    const missionNumber = index + start;
                    
                    return (
                        <TouchableOpacity
                            key={missionNumber}
                            style={[
                                styles.box,
                                pressedBoxes.includes(missionNumber) && styles.selectedBox,
                            ]}
                            onPress={() => handlePress(missionNumber)}
                        >
                            <Text style={styles.boxText}>Misión {missionNumber}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={styles.separatorContainer}>
                <View style={styles.separatorLine} />
                <Text style={styles.separatorText}>{letter}</Text>
                <View style={styles.separatorLine} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Iconos en las esquinas superiores */}
            <View style={styles.topIconsContainer}>
                <TouchableOpacity onPress={navigateToHelp}>
                    <Image source={require('../images/iconos/mapachin.png')} style={styles.topIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={navigateToProfile}>
                    <Image source={require('../images/iconos/perfil.png')} style={styles.topIcon} />
                </TouchableOpacity>
            </View>

            {/* Mostrar el ID del usuario */}
            <View style={styles.userIdContainer}>
                <Text style={styles.userIdText}>ID del usuario: {userId ? userId : 'Cargando...'}</Text>
            </View>

            {/* Mensaje de bienvenida */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.texto}>¡Bienvenido a la pantalla de inicio!</Text>
            </View>

            {/* Rayita decorativa arriba del primer grupo de recuadros */}
            <View style={styles.separatorContainer}>
                <View style={styles.separatorLine} />
            </View>

            {/* Contenedor de recuadros con ocultamiento */}
            <View style={styles.hiddenContainer}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.boxWrapper}>
                        {renderBlockGroup(1, 6, 'Letra Ñ')}
                        {renderBlockGroup(7, 12, 'Letra R')}
                        {renderBlockGroup(13, 18, 'C')}
                        {renderBlockGroup(19, 22, 'D')}
                    </View>
                </ScrollView>
            </View>

            {/* Iconos en la parte inferior */}
            <View style={styles.iconBorder}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('FormHome')}>
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
    welcomeContainer: {
        marginTop: 120,
        marginBottom: 20,
        alignItems: 'center',
    },
    texto: {
        fontSize: 25,
        textAlign: 'center',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    boxWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    groupContainer: {
        marginBottom: 30,
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    selectedBox: {
        backgroundColor: 'green',
    },
    boxText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    separatorLine: {
        height: 1,
        backgroundColor: 'gray',
        flex: 1,
    },
    separatorText: {
        fontSize: 16,
        color: 'gray',
        marginHorizontal: 10,
    },
    iconBorder: {
        position: 'absolute',
        bottom: 20,
        width: '81%',
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
    hiddenContainer: {
        flex: 1,
        marginBottom: 70,
        overflow: 'hidden',
    },
});

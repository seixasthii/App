import React, {useState} from "react";
import {Card} from 'react-native-paper';
import { View, TextInput, TouchableOpacity } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Texto from '../../Componets/Texto'
import styles from './estilosPerfil'

export default function Index(){
    
    const[facing, setFacing] = useState<CameraType>('back');
    const[permission, requestPermission] = useCameraPermissions();
    
    //Se as permissões da câmera ainda estiverem carregando, exibe uma view vazia
    if(!permission) {
        return <View/>;
    }

    //Solicita permissões da câmera
    if(!permission.granted){
        return <View style={styles.container}>
                    <Texto style={styles.message}>Precisamos da sua autorização para exibir a câmera</Texto>
                    <TouchableOpacity onPress={requestPermission}>
                        <Texto>Permitir</Texto>
                    </TouchableOpacity>
                </View>
    }

    //Faz a troca da câmera
    function toggleCameraFacing(){
        setFacing(current=>(current === 'back' ? 'front' : 'back'));
    }

    return <View style={styles.container}>
                <CameraView facing={facing} style={styles.camera}>
                    <View style={styles.cameraContainer}>
                        <TouchableOpacity style={styles.cameraVirarBotao} onPress={toggleCameraFacing}>
                            <Ionicons name="repeat" size={30} color="cyan"></Ionicons>
                        </TouchableOpacity>
                    </View>
                </CameraView>
                <Card mode='elevated' style={styles.cardContainer}>
                    <Card.Content>
                        <Texto style={styles.text}>Nome completo</Texto>
                        <TextInput style={styles.input} placeholder="nome Completo"/>
                        
                        <Texto style={styles.text}>E-Mail</Texto>
                        <TextInput style={styles.input} placeholder="E-mail"/>

                        <Texto style={styles.text}>WhatsApp</Texto>
                        <TextInput style={styles.input} placeholder="Número" keyboardType="numeric"/>
                    </Card.Content>
                </Card>
        </View>
}



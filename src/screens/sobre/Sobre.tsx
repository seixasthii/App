import React from "react";
import { StatusBar, StyleSheet, ScrollView, Image } from "react-native";
import { useVideoPlayer, VideoView } from 'expo-video';


import Texto from '../../Componets/Texto';

const videoSource = require('../../../assets/drift.mp4');


export default function Sobre(){
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
      });



  return <ScrollView style={estilos.sobre}>
    <StatusBar/>
    <Image source={require('../../../assets/togurologo.png')} style={estilos.logo}></Image>
    <Texto style={estilos.texto_sobre}>
    TOGURO'S CAR:
    {'\n'}
    Seu Carro em Boas Mãos!
    {'\n'}{'\n'}
    Com peças de alta qualidade, equipamentos modernos e uma equipe especializada, oferecemos os melhores componentes e serviços para manter seu veículo sempre no topo.
    {'\n'}{'\n'}
    Na TOGURO'S, você encontra desempenho, durabilidade e atendimento profissional. Garanta o melhor para seu carro!
    </Texto>
    
    <VideoView style={estilos.video} player={player} allowsFullscreen allowsPictureInPicture />
  </ScrollView> 
}

const estilos = StyleSheet.create({
  sobre: {
    backgroundColor: "#B7FFFC",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  texto_sobre: {
    marginTop: 20,
    fontSize: 23,
    color: 'black',
    lineHeight:25,
    paddingVertical:16,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderRadius: 50,
  },
  imgsobre: {
    width: 200,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: 'center',
  },
});
import React, { useState } from "react";
import { View, TouchableOpacity, Modal, Image, Alert } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons"
import PagerView from "react-native-pager-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from '../../Componets/Texto';
import styles from './estilosProd'

export default function Produto({ prod: { id, nome, descricao, imagem, slider} }: any) {
    const [statusModal, acaoAbreFecha] = useState(false);

    //Função para adicionar a lista de desejos
    async function salvarProd(id:any,nome:any,descricao:any,imagem:any){
        const lista = {id,nome,imagem, descricao}
        // Verifica se a lista de desejos ja existe
        const ListaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        if(ListaDesejosSalva!==null){
            // lista ja possui produtos
            const ListaDesejosNova = JSON.parse(ListaDesejosSalva);

            // adiciona o novo produto no array
            ListaDesejosNova.push(lista);

            // atualiza o async
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify(ListaDesejosNova));
            Alert.alert('Produto adicionado na Lista de desejos')
            console.log(lista)
        }
        else{
            //cria lista
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify([lista]));

            Alert.alert('Produto salvo com sucesso!!');

            console.log(lista);
        }
        
        

    }


    return <View>
        <Card mode='elevated' style={styles.card}>
            <Card.Content  style={styles.produtos}>
                <Texto style={styles.Titulocard}>{nome}</Texto>
            </Card.Content>
            <Card.Cover source={imagem} style={styles.imagens} />
            <Card.Actions>
                <TouchableOpacity style={styles.botao} onPress={()=>salvarProd(id,nome,descricao,imagem)}>
                    <Ionicons name="heart" size={30} color="red"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => acaoAbreFecha(true) } style={styles.botaoModal}>
                    <Texto>
                        <Ionicons name="chevron-down-circle-sharp" size={30} color="Black"  />
                    </Texto>        
                </TouchableOpacity>
            </Card.Actions>
        </Card>

    {/* Modal dos Produtos */}
        <Modal animationType="fade" transparent={true} visible={statusModal}>
            <View>
                <View style={styles.Modal}>
                    <TouchableOpacity onPress={() => acaoAbreFecha(false)}>
                        <Ionicons name='close' size={30} color="red" />
                    </TouchableOpacity>
                    <Texto style={styles.textoTitulo}>{nome}</Texto>
                    <Texto style={styles.textoDesc}>{descricao}</Texto>
                    {/*<Image style={styles.imagemModal} source={imagem} />*/}
                    {/* slider de imagens do produto */}
                    <PagerView initialPage={0} style={styles.PagerView}>
                        {/*Monta o laço de repetição*/
                            slider.map((img:any,index:any)=>(
                                <View key={index} style={styles.page} >
                                    <Image source={img} resizeMode='contain' style={styles.imagemSlider}/>
                                </View>
                            ))}
                    </PagerView>
                </View>
            </View>
        </Modal>
    </View>
}
import React,{useState, useEffect} from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from "../../Componets/Texto";
import styles from "./estiloListaDesejos";
import CadaItem from "./listaitem";

export default function Index(){

    //captura os dados do async storage
    const [lista, setLista] = useState([])

    const carregaListaDesejos = async() => {
        const listaSalva = await AsyncStorage.getItem('ListaDesejos')
        setLista(JSON.parse(listaSalva))
        console.log(listaSalva)
    }

    useEffect(()=>{carregaListaDesejos()},[])

    return <View>
        <Texto>Lista de desejos</Texto>
        <Texto>Estes são os produtos adicionados Lista de desejos:</Texto>

        <FlatList
            data={lista}
            renderItem={({item})=> <CadaItem {...item}/>}
            keyExtractor={({id})=> id}
            numColumns={2}
        />

        <TouchableOpacity onPress={async()=>{await AsyncStorage.clear()}}>
            <Texto>
                Limpar lista de desejos
            </Texto>
        </TouchableOpacity>
    </View>
}
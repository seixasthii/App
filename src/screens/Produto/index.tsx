import React from "react";
import { View, FlatList }  from "react-native";
import CadaProduto from './exibir';
import styles from './estilosProd'

export default function index({itens}:any){
    return <View style={styles.corFundo}>
                <FlatList data={itens.lista} 
                renderItem={({item})=> <CadaProduto prod={item}/>} 
                keyExtractor={itens.lista.id}/>
           </View>
}
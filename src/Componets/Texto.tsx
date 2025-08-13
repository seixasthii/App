import React from 'react-native'
import { Text, StyleSheet } from 'react-native'

export default function Texto({children, style}:any){
  let estilo_padrao = estilos.padrao
  return <Text style={[estilo_padrao, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
  padrao: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'Oswald-Regular',
    lineHeight:30,
  },
  
});
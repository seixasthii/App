import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const estilosProdutos=StyleSheet.create({
    corFundo: {
        backgroundColor: "#B7FFFC",
        paddingBottom: 15,
        flex: 1, 
      },      
      card: {
        borderRadius: 35,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginBottom: 5,
        borderWidth: 13,
      },  
      Titulocard:{
        color:'black',
        fontFamily:'Poetsen-Regular',
        fontSize:30,
        alignSelf:'center',
      },
     
    produtos:{
        padding: 10, 
        borderRadius: 10,
        marginTop: 10,
        resizeMode: 'contain',
        alignSelf: 'center', 
        
    },
    imagemModal: {
        width: '60%',
        height: '49%',
        alignSelf: 'center',
        backgroundColor: 'black',
        borderRadius:10,
        borderWidth: 4,
        marginTop:20,
      },      
    imagens:{
       width: '50%',
       alignSelf: 'center',

    },
    imagemSlider: {
        height: '100%',
        alignSelf: 'center'
    },
    Modal:{
        backgroundColor: 'white',
        width:'85%',
        height:'75%',
        borderWidth:6,
        alignSelf: 'center',
        marginTop:'15%',
        borderColor:'#d3d3d3'
    },
    textoTitulo:{
        color:'black',
        fontFamily:'Poetsen-Regular',
        fontSize:36,
        padding: 5,
    },
    textoDesc:{
        padding: 15,
        color:'black',
        fontFamily:' UI, Tahoma, Geneva, Verdana, sans-seri',
        fontSize:18,
    },
    botaoModal :{
        left: '-2%',
    },
    PagerView:{
        flex: 1,

    },
    page:{
        justifyContent: 'center',
        textAlign:'center',
    },
    botao:{
    width: "50%",
    left: '40%',
  },
})

export default estilosProdutos;




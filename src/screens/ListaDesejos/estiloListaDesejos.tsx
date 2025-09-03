import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listaContainer: {
        flex: 1,
    },
    cardContainer: {
        width: '50%',
    },
    imagem: {
        width: '80%',
        alignSelf: 'center',
    },
    card: {
        width: '60%',
        alignSelf: 'center',
        backgroundColor: 'purple',
    },
    titulo: {
        paddingTop: '50%',
        paddingBottom: 10,
        fontSize: 30,
        color: 'purple',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    botaoApagar: {
        paddingBottom: 10,
        width: '30%',
        backgroundColor: '#6600CC',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 2,
    },
    nomeProduto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default styles;
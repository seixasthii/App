import { StyleSheet } from "react-native";

const stylesGeral = StyleSheet.create({
    botaoAudio: {
        backgroundColor: "#333",
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // para Android
    },
    textoBotaoAudio: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
    }
})

export default stylesGeral;
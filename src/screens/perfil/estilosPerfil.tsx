import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B7FFFC',
  },
  cardContainer: {
    marginTop: 20,
    backgroundColor: 'gray',
    width: '80%',
    alignSelf: 'center',
  },
  camera: {
    width: '70%',
    height: '45%',
    alignSelf: 'center',
    borderRadius: '10',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  cameraVirarBotao: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: "#d3d3d3",
  },
  input: {
    width: '70%',
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 16,
    borderRadius: 2,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  botao:{
    width: "50%",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 2,
    paddingBottom: 5,
    marginRight: 5,
  },
  textoBotao:{
    width: "100%",
    fontSize: 16,
    color: "white",
    alignItems: "center",
  }
});

export default Styles;
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({


  geral: {
    flex: 1
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: 360,
    backgroundColor: 'red',
  },


  oros: {
    color: "#FFFFFF",
    fontSize: 32,
  },

  bemVindoAoOros: {
    width: '100%',
    height: '45%',
    alignItems: "center",
    position: "absolute",

  },

  view: {
    marginTop: '-25%',
    marginLeft: "10%",
    width: "80%",
    height: height  * 1.02,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 13,
    borderRadius: 12,

  },

  login: {
    fontSize: width * 0.07,
    color: "#1B2F49",
    marginTop: height * 0.04,
    marginBottom: height * 0.02,
    textDecorationLine: 'underline',
    fontFamily: 'MBFSpace',
    // fontWeight: 'bold'

  },

  EmailSenha: {
    color: "#808080",
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    marginTop: width * 0.03,
    fontSize: height * 0.02,
  },

  GmailComImagem: {
    flexDirection: 'row',
    marginRight: '-2%',
    alignItems: 'center',
    width:"80%"
  },

  SenhaComImagem: {
    width: "90%",
    marginRight: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  InputComCadeado: {
    flexDirection: 'row',
    marginLeft: '14%',

  },

  buttonLogin: {
    backgroundColor: "#003470",
    color: "white",
    width: 135,
    height: 35,
    borderRadius: 20,
    elevation: 2,
    fontSize: 20,
    textAlign: "center",
    marginTop: "5%",
    fontWeight: 'bold',

  },

  Button: {
    alignItems: 'center',
    textAlign: "center",
    justifyContent: 'center',

  },

  Input: {
    alignSelf: "flex-start",
    marginLeft: width * 0.01,
    width: "80%"
  },

  EsqueceuSuaSenha: {
    marginLeft: "50%",
    color: "#BA0808",
    textDecorationLine: 'underline',
    marginTop: width * 0.02,
    justifyContent: 'flex-end'
  },

  NaoPossuiUmaContaAindaCadastrese: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '10%'
  },

  NaoPossuiUmaContaAinda: {
    fontSize: height * 0.015,
    marginTop: width * 0.02,
    color: "#808080",

  },

  Cadastrase: {
    fontSize: height * 0.015,
    marginTop: width * 0.02,
    color: "#00D455",
    textDecorationLine: 'underline',
    fontWeight: 'bold',

  },

  EmergenciaContate: {
    color: "#142944",
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: width * 0.07,
    marginBottom: width * 0.04

  },

  ViewEmergence: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },

  EmergenciaContateBotoes: {
    alignItems: 'center',
  },

  BombeiroPoliciAmbulancia: {
    color: "#142944",
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  errorText: {
    color: '#BA0808',
    fontSize: 14
  },

  scrollView: {

      backgroundColor: "gray",
      width: "100%",
      height: "100%",
 
  },

});

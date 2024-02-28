import { StyleSheet } from "react-native";  

export const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  Cadastrase: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "5%",
    alignItems: 'center',
    alignSelf: 'center',
  },
  Cadastra: {
    color: "#ffffff",
    fontWeight: "bold",
    elevation: 1000
  },
  Icons: {
    justifyContent: "center",
    alignItems: "center",
  },
  minilogo: {
    width: 60,
    height: 60,
  },
  ContainterIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  Button: {
    marginTop: "1%",
    marginBottom: "5%",
    color: "#BA0808",
  },

  Login: {
    backgroundColor: "white",
    marginTop: "50%",
    width: "80%",
    height: "45%",
    borderRadius: 15,
    elevation: 2,
  },

  LoginText: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: "15%",
    color: "#0158FF",
    margin: "10%",
    fontWeight: "bold",
    textDecorationLine: 'underline'

  },

  EmailPassowrd: {
    marginTop: "2%",
    marginLeft: "15%",
    fontSize: 15,
  },

  ButtonLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },


  buttonLogin: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0057FF',
    margin: 5,
    padding: 10,
    height: 60,
    width: "70%",
    flexDirection: "row",
    borderRadius: 100,
    elevation: 100000000000

  },
  ainda:{
    alignSelf: 'center',
    alignItems: 'center'
  },
});

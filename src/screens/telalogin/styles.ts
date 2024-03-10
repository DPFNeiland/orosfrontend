import { StyleSheet, View } from "react-native";  
import { useFonts } from 'expo-font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 360,
    backgroundColor: '#142944',
  },


  oros: {
    color: "#FFFFFF",
    fontSize: 32,
  },

  bemVindoAoOros: {
    width: '100%',
    height: '45%',
    alignItems: "center"
  },

  view: {
    width: "80%",
    height: 320,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 4,
    borderRadius: 12
  },

  login: {
    fontSize: 32,
    color: "#1B2F49",
    marginBottom: 30
  },

  EmailSenha: {
    color: "#808080",
    alignSelf: 'flex-start',
    marginLeft: 50
  }
});

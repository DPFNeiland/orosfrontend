import React from "react";
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import BemVindoAo from "./bemVindoAo";
import Oros from "./oros";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  function handleSignIn() {
    const data = {
      email,
      senha,
    }

    console.log(data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bemVindoAoOros}>
        <BemVindoAo />
        <Oros />
        <View style={styles.view}>
          <Text style={styles.login}>Login</Text>

          <Text style={styles.EmailSenha}>E-Mail</Text>
          <TextInput
            style={styles.Input}
            onChangeText={setEmail}
            placeholder="example@gmail.com"
            placeholderTextColor="#808080"
            textAlign="left"
          >

          </TextInput>

          <Text style={styles.EmailSenha}>Senha</Text>
          <TextInput
            style={styles.Input}
            onChangeText={setSenha}
            placeholder="*****************"
            placeholderTextColor="#808080"

          >

          </TextInput>

          <TouchableOpacity onPress={handleSignIn} >
            <Text style={styles.buttonLogin}
            >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

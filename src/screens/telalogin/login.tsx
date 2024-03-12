import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./Styles";
import BemVindoAo from "./bemVindoAo";
import Oros from "./oros";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [lembreDeMim, setLembreDeMim] = React.useState(false);


  function handleSignIn() {
    const data = {
      email,
      senha,
    }

    console.log(data)
  }

  return (
    <SafeAreaView style={styles.geral}>
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

            <View>

              <Pressable>
                <Text style={styles.EsqueceuSuaSenha}>Esqueceu sua senha?</Text>
              </Pressable>

            </View>

            <Pressable onPress={handleSignIn} style={styles.Button} >
              <Text
                style={styles.buttonLogin}
              >Login</Text>
            </Pressable>



          </View>


          <View style={styles.NaoPossuiUmaContaAindaCadastrese}>
            <Text style={styles.NaoPossuiUmaContaAinda}>Não possui uma conta ainda?</Text>
            <Pressable>
              <Text style={styles.Cadastrase}> Cadastre-se</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Login;

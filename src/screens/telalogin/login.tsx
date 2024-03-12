import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Pressable, Image } from "react-native";
import { styles } from "./Styles";
import BemVindoAo from "./bemVindoAo";
import Oros from "./oros";
import Bombeiro from "./bombeiros";
import Policia from "./policia";
import Ambulancia from "./ambulancia";
import EyeCrossed from "./eyecrossed";
import Gmail from "./gmail";
import Cadeado from "./cadeado";

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

  function handleFlamengo() {
    console.log("Flamengo")
  }

  return (
    <SafeAreaView style={styles.geral}>
      <SafeAreaView style={styles.container}>
        <View style={styles.bemVindoAoOros}>
          <BemVindoAo />
          <Oros />
          <View style={styles.view}>
            <Text style={styles.login}>LOGIN</Text>

            <Text style={styles.EmailSenha}>E-Mail</Text>
            <View style={styles.GmailComImagem}>
              <Gmail></Gmail>
              <TextInput
                style={styles.Input}
                onChangeText={setEmail}
                placeholder="example@gmail.com"
                placeholderTextColor="#808080"
                textAlign="left"
              >

              </TextInput>
            </View>

            <Text style={styles.EmailSenha}>Senha</Text>
            <View style={styles.SenhaComImagem}>
              <View style={styles.InputComCadeado}>
                <Cadeado></Cadeado>
                <TextInput
                  style={styles.Input}
                  onChangeText={setSenha}
                  placeholder="*****************"
                  placeholderTextColor="#808080"
                >

                </TextInput>
              </View>
              <EyeCrossed></EyeCrossed>

            </View>
            <View>

              <Pressable>
                <Text style={styles.EsqueceuSuaSenha}>Esqueceu sua senha?</Text>
              </Pressable>

            </View>

            <Pressable onPress={handleSignIn} style={styles.Button} >
              <Text style={styles.buttonLogin}>Login</Text>
            </Pressable>



          </View>


          <View style={styles.NaoPossuiUmaContaAindaCadastrese}>
            <Text style={styles.NaoPossuiUmaContaAinda}>Não possui uma conta ainda?  </Text>
            <Pressable>
              <Text style={styles.Cadastrase}>Cadastre-se</Text>
            </Pressable>
          </View>

          <Text style={styles.EmergenciaContate}>Emergência? Contate:</Text>

          <View style={styles.ViewEmergence}>
            <View style={styles.EmergenciaContateBotoes}>
              <Pressable onPress={handleFlamengo}>
                <Bombeiro></Bombeiro>
              </Pressable>
              <Text style={styles.BombeiroPoliciAmbulancia}>Bombeiro</Text>
            </View>
            <View style={styles.EmergenciaContateBotoes}>
              <Pressable onPress={handleFlamengo}>
                <Policia></Policia>
              </Pressable>
              <Text style={styles.BombeiroPoliciAmbulancia}>Polícia</Text>
            </View>
            <View style={styles.EmergenciaContateBotoes}>
              <Pressable onPress={handleFlamengo}>
                <Ambulancia></Ambulancia>
              </Pressable>
              <Text style={styles.BombeiroPoliciAmbulancia}>Ambulância</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView >
  );
};

export default Login;

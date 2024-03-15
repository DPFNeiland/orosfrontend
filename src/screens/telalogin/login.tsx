import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./Styles";
import BemVindoAo from "./bemVindoAo";
import Oros from "./oros";
import Bombeiro from "./bombeiros";
import Policia from "./policia";
import Ambulancia from "./ambulancia";
import EyeCrossed from "./eyecrossed";
import Gmail from "./gmail";
import Cadeado from "./cadeado";
import useLoadFonts from "./useLoadFonts";

export default function Login() {
  const [senha, setSenha] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fontsLoaded = useLoadFonts(); // Invoke the function here

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded || isLoading) {
    return console.log("Vasco");
  }




  function handleSignIn() {
  }





  function handleFlamengo() {
    console.log("Flamengo");
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
                    textAlign="left" />
      

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

            <TouchableOpacity onPress={handleSignIn} style={styles.Button}>
              <Text style={styles.buttonLogin}>Login</Text>
            </TouchableOpacity>



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
              <TouchableOpacity onPress={handleFlamengo}>
                <Bombeiro></Bombeiro>
              </TouchableOpacity>
              <Text style={styles.BombeiroPoliciAmbulancia}>Bombeiro</Text>
            </View>
            <View style={styles.EmergenciaContateBotoes}>
              <TouchableOpacity onPress={handleFlamengo}>
                <Policia></Policia>
              </TouchableOpacity>
              <Text style={styles.BombeiroPoliciAmbulancia}>Polícia</Text>
            </View>
            <View style={styles.EmergenciaContateBotoes}>
              <TouchableOpacity onPress={handleFlamengo}>
                <Ambulancia></Ambulancia>
              </TouchableOpacity>
              <Text style={styles.BombeiroPoliciAmbulancia}>Ambulância</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}



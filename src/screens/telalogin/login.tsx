import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
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
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const fontsLoaded = useLoadFonts(); // Invoke the function here

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSignIn = (data: any) => {
    // Handle sign in logic here using the form data
    console.log(data);
  };

  const handleFlamengo = () => {
    console.log("Flamengo");
  };

  if (!fontsLoaded || isLoading) {
    return <Text>Loading...</Text>;
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
              <Gmail />
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    style={styles.Input}
                    onChangeText={(value) => field.onChange(value)}
                    value={field.value}
                    placeholder="example@gmail.com"
                    placeholderTextColor="#808080"
                    textAlign="left"
                    keyboardType="email-address"
                  />
                )}
                name="email"
                rules={{ 
                  required: 'Email is required', 
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Digite um email válido"
                  }
                }}
              />
            </View>
            {errors.email && <Text style={styles.errorText}>Digite um email válido</Text>}

            <Text style={styles.EmailSenha}>Senha</Text>
            <View style={styles.SenhaComImagem}>
              <View style={styles.InputComCadeado}>
                <Cadeado />
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="*****************"
                      placeholderTextColor="#808080"
                      secureTextEntry
                    />
                  )}
                  name="senha"
                  rules={{ 
                    required: 'Digite uma senha válida', 
                    minLength: { value: 8, message: 'Senha de 8 dígitos' }
                  }}
                />
              </View>
              <EyeCrossed />
            </View>
            {errors.senha && <Text style={styles.errorText}>Senha de 8 dígitos</Text>}

            <View>
              <Pressable>
                <Text style={styles.EsqueceuSuaSenha}>Esqueceu sua senha?</Text>
              </Pressable>
            </View>

            <TouchableOpacity onPress={handleSubmit(handleSignIn)} style={styles.Button}>
              <Text style={styles.buttonLogin}>Login</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.NaoPossuiUmaContaAindaCadastrese}>
            <Text style={styles.NaoPossuiUmaContaAinda}>Não possui uma conta ainda? </Text>
            <Pressable>
              <Text style={styles.Cadastrase}>Cadastre-se</Text>
            </Pressable>
          </View>

          <Text style={styles.EmergenciaContate}>Emergência? Contate:</Text>

          <View style={styles.ViewEmergence}>
            <View style={styles.EmergenciaContateBotoes}>
              <TouchableOpacity onPress={handleFlamengo}>
                <Bombeiro />
              </TouchableOpacity>
              <Text style={styles.BombeiroPoliciAmbulancia}>Bombeiro</Text>
            </View>
            <View style={styles.EmergenciaContateBotoes}>
              <TouchableOpacity onPress={handleFlamengo}>
                <Policia />
              </TouchableOpacity>
              <Text style={styles.BombeiroPoliciAmbulancia}>Polícia</Text>
            </View>
            <View style={styles.EmergenciaContateBotoes}>
              <TouchableOpacity onPress={handleFlamengo}>
                <Ambulancia />
              </TouchableOpacity>
              <Text style={styles.BombeiroPoliciAmbulancia}>Ambulância</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

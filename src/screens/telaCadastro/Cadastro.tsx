import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./Styles";
import BemVindoAo from "./bemVindoAo";
import Oros from "./oros";
import EyeCrossed from "./eyecrossed";
import Gmail from "./gmail";
import Cadeado from "./cadeado";
import useLoadFonts from "./useLoadFonts";

export default function Login() {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
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

  const senha = watch("senha", "");
  const confirmarSenha = watch("confirmarSenha", "");

  const handleFlamengo = () => {
    console.log("Flamengo");
  };

  if (!fontsLoaded || isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.geral}>
      <View style={styles.container}>
        <View style={styles.bemVindoAoOros}>
          <BemVindoAo />
          <Oros />
          <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
              <Text style={styles.login}>CADASTRO</Text>

              <ScrollView>
                <Text style={styles.EmailSenha}>Nome Completo</Text>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Seu nome completo"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="nomeCompleto"
                  rules={{ required: "Nome completo é obrigatório" }}
                />
                {errors.nomeCompleto && <Text style={styles.errorText}>Nome completo é obrigatório</Text>}

                <Text style={styles.EmailSenha}>Naturalidade</Text>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Sua naturalidade"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="naturalidade"
                  rules={{ required: "Naturalidade é obrigatória" }}
                />
                {errors.naturalidade && <Text style={styles.errorText}>Naturalidade é obrigatória</Text>}

                {/* Adicione os demais campos aqui... */}

                <Text style={styles.EmailSenha}>Confirmar Senha</Text>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Confirme sua senha"
                      placeholderTextColor="#808080"
                      secureTextEntry
                    />
                  )}
                  name="confirmarSenha"
                  rules={{
                    required: 'Confirme sua senha',
                    validate: value => value === senha || 'As senhas não correspondem'
                  }}
                />
                {errors.confirmarSenha && <Text style={styles.errorText}>As senhas não correspondem</Text>}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    </View >
  );
}

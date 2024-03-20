import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./Styles";
import BemVindoAo from "../../components/bemVindoAo";
import Oros from "../../components/oros";
import EyeCrossed from "../../components/eyecrossed";
import Gmail from "../../components/gmail";
import Cadeado from "../../components/cadeado";
import Nomecomplet from "../../components/nomeCompleto";
import Naturalidade from "../../components/Naturalidade";
import Cpf from "../../components/Cpf";
import EstadoCivil from "../../components/EstadoCivil";
import Nascimento from "../../components/Nascimento";

type Formdata ={
  nome: string,
  naturalidade: string,
  estadocivil: string,
  datadenascimento: string,
  email: string,
  cep: string,
  senha: string,
}

export default function Cadastro({navigation}: any) {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();


  const handleSignIn = (data: any) => {
    console.log(data);
    
    
  };

  const senha = watch("senha", "");
  const confirmarSenha = watch("confirmarSenha", "");

  const handleFlamengo = () => {
    console.log("Flamengo");
  };


  return (
    <View style={{ flex: 1, }}>
      <ScrollView>
        <View style={{ backgroundColor: '#142944', width: '100%', height: 360, alignItems: 'center', paddingTop: 98 }}>
          <BemVindoAo />
          <Oros />

        </View>

        <View style={styles.view}>
          <Text style={styles.login}>Cadastro</Text>
          <Text style={styles.EmailSenha}>Leandro Pinheiro Neiland</Text>
          <View style={styles.GmailComImagem}>
            <Nomecomplet />

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
          </View>
          {errors.nomeCompleto && <Text style={styles.errorText}>Nome completo é obrigatório</Text>}

          <Text style={styles.EmailSenha}>Naturalidade</Text>
          <View style={styles.GmailComImagem}>
            <Naturalidade />

            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={styles.Input}
                  onChangeText={(value) => field.onChange(value)}
                  value={field.value}
                  placeholder="Manaus - Am"
                  placeholderTextColor="#808080"
                />
              )}
              name="naturalidade"
              rules={{ required: "Naturalidade é obrigatória" }}
            />
          </View>

          {errors.naturalidade && <Text style={styles.errorText}>Naturalidade é obrigatória</Text>}


          <Text style={styles.EmailSenha}>Estado Civil</Text>
          <View style={styles.GmailComImagem}>
            <EstadoCivil></EstadoCivil>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={styles.Input}
                  onChangeText={(value) => field.onChange(value)}
                  value={field.value}
                  placeholder="Solteiro"
                  placeholderTextColor="#808080"
                />
              )}
              name="estadoCivil"
              rules={{ required: "Estado civil é obrigatório" }}
            />
          </View>



          {errors.estadoCivil && <Text style={styles.errorText}>Estado civil é obrigatório</Text>}
          <Text style={styles.EmailSenha}>Data de Nascimento</Text>

          <View style={styles.GmailComImagem}>
            <Nascimento/>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={styles.Input}
                  onChangeText={(value) => field.onChange(value)}
                  value={field.value}
                  placeholder="Sua data de nascimento"
                  placeholderTextColor="#808080"
                  keyboardType="numeric"
                />
              )}
              name="dataNascimento"
              rules={{ required: "Data de nascimento é obrigatória" }}
            />
          </View>
          {errors.dataNascimento && <Text style={styles.errorText}>Data de nascimento é obrigatória</Text>}

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
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Digite um email válido"
                }
              }}
            />
          </View>
          {errors.email && <Text style={styles.errorText}>Digite um email válido</Text>}
          <Text style={styles.EmailSenha}>CPF</Text>
          <View style={styles.GmailComImagem}>
            <Cpf />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={styles.Input}
                  onChangeText={(value) => field.onChange(value)}
                  value={field.value}
                  placeholder="123.456.789-00"
                  placeholderTextColor="#808080"
                  keyboardType="numeric"
                />
              )}
              name="cpf"
              rules={{
                required: 'CPF é obrigatório',
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: "Digite um CPF válido"
                }
              }}
            />
          </View>

          {errors.cpf && <Text style={styles.errorText}>Digite um CPF válido</Text>}

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
                  required: 'Senha é obrigatória',
                  minLength: { value: 8, message: 'Senha deve ter no mínimo 8 caracteres' }
                }}
              />
            </View>
            <EyeCrossed />
          </View>
          {errors.senha && <Text style={styles.errorText}>Senha deve ter no mínimo 8 caracteres</Text>}
          <Text style={styles.EmailSenha}>Confirme sua senha</Text>
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
                  required: 'Senha é obrigatória',
                  minLength: { value: 8, message: 'Senha deve ter no mínimo 8 caracteres' }
                }}
              />
            </View>
            <EyeCrossed />
          </View>
          {errors.senha && <Text style={styles.errorText}>Senha deve ter no mínimo 8 caracteres</Text>}

          <TouchableOpacity onPress={handleSubmit(handleSignIn)} style={styles.Button}>
            <Text style={styles.buttonLogin}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.NaoPossuiUmaContaAindaCadastrese}>
          <Text style={styles.NaoPossuiUmaContaAinda}>Já possui uma conta? </Text>
          <Pressable onPress={ () => navigation.navigate('Login')}>
            <Text style={styles.Cadastrase}> Faça o Login</Text>
          </Pressable>
        </View>
        <View />

      </ScrollView>
    </View>
  );
}           

import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Login = () => {
  const [emailorphone, onChangeText] = React.useState("");
  const [password, onChangeNumber] = React.useState("");

  return (
    <View style={styles.View}>
      <LinearGradient
        colors={["#0057FF", "#0094FFB2"]}
        style={styles.background}
      >
        <Text style={styles.Text}>Bem-vindo ao</Text>
        <Text style={styles.Text}>O.R.O.S</Text>
      </LinearGradient>

      <View style={styles.Login}>
        <Text style={styles.LoginText}>Login</Text>
        <View>
          <Text style={styles.EmailPassowrd}>E-Mail</Text>
          <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor="#0000009E"
            style={styles.EmailPassowrd}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.EmailPassowrd}>Senha</Text>
          <TextInput
            placeholder="**************"
            placeholderTextColor="#0000009E"
            style={styles.EmailPassowrd}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.buttonLogin}> 

            <Text style={styles.Cadastra}>LOGIN</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.Cadastrase}>
        <Text style={styles.ainda}> Não possui uma conta ainda?</Text>
        <TouchableOpacity>
          <Text style={styles.Cadastra}> Cadastre - se</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.Button}>Emergência? Contate: </Text>

      <View style={styles.ContainterIcon}>
        <TouchableOpacity style={styles.Icons}>
          <Image
            source={require("../../../assets/bombeiro.png")}
            style={styles.minilogo}
          ></Image>
          <Text style={styles.Button}>Bombeiro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icons}>
          <Image
            source={require("../../../assets/policia.png")}
            style={styles.minilogo}
          ></Image>
          <Text style={styles.Button}>Polícia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icons}>
          <Image
            source={require("../../../assets/ambulancia.png")}
            style={styles.minilogo}
          ></Image>
          <Text style={styles.Button}>Bombeiro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

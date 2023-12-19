import styles from "./styles";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";
import { useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig/firebase";
import Cadastro from "../cadastro/cad";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import home from "../home/home";


const imageUrl =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2FCadastro.png?alt=media&token=fd62777d-a371-4dbc-a17b-e86c5b461526";

const icon =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2Farrow-left%20(2).svg?alt=media&token=c738cbe3-e8a3-459a-ad48-a334dc340930";

export default function Log({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const auth = getAuth();

  const btLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate(home)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}

  return (
    <View style={styles.fullPage}>
      <View style={styles.cont}>
        <ImageBackground
          source={require("../../images/logoDois.png")}
          style={{ width: 400, height: 900 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: icon }} style={styles.icone} />
          </TouchableOpacity>

          <View style={styles.wel}>
            <Text style={styles.texto}>
              Seja bem-vindo ao Japa´s Food, faça seu login aqui
            </Text>
          </View>

          <Text style={styles.txtInput}>Email: </Text>
          <TextInput
            style={styles.inpute}
            placeholder="Digite seu email"
            placeholderTextColor={"#ababab"}
            value={email}
            keyboardType="email"
            onChangeText={(email) => {setEmail(email)}}
          />

          <Text style={styles.txtInput}>Senha: </Text>
          <TextInput
            style={styles.inpute}
            placeholder="Digite sua senha"
            placeholderTextColor={"#ababab"}
            value={senha}
            keyboardType="password"
            onChangeText={(senha) => {setSenha(senha)}}
          />

          <TouchableOpacity style={styles.button} onPress={()=>btLogin()}>
            <Text style={styles.logar}>Logar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
  }
// => navigation.navigate('Home')}

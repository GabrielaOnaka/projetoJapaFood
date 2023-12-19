import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import TelaInicio from "../telaInicio/Inicio";

import { FaArrowLeft } from "react-icons/fa6";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { setDoc, doc, collection, addDoc,  } from "firebase/firestore";
import { db, auth } from "../FirebaseConfig/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Login from "../login/log.js";

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  function create ({navigation}){

    addDoc(collection(db, "Cadastros"), {
      nome: nome,
      telefone: telefone,
      email: email,
      senha: senha,
    }).then(() => {
      createUserWithEmailAndPassword(auth, email, senha).then((respo) => {
        navigation.navigate(Login)
      }).catch(error =>{
        console.log(error);
      })
      console.log('data submitted');
    }).catch((error) => {
      console.log(error);
    });
  }

  const imageUrl =
    "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2FCadastro.png?alt=media&token=fd62777d-a371-4dbc-a17b-e86c5b461526";

  const icon =
    "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2Farrow-left%20(2).svg?alt=media&token=c738cbe3-e8a3-459a-ad48-a334dc340930";

  return (
    <ScrollView>
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
                Seja bem vindo ao Japa´s Food, faça aqui seu primeiro cadastro
              </Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.txtInput}>Nome: </Text>
            </View>
            <TextInput
              style={styles.inputs}
              placeholder="Digite seu nome"
              placeholderTextColor={"#ababab"}
              value={nome}
              // onChange={(nome) => {setNome(nome)}} 
              onChangeText={(e) => {setNome(e)}}
            />

            <Text style={styles.txtInput}>Telefone: </Text>
            <TextInput
              style={styles.inpute}
              placeholder="Digite seu telefone"
              placeholderTextColor={"#ababab"}
              value={telefone}
              onChangeText={(telefone) => {setTelefone(telefone)}}
            />

            <Text style={styles.txtInput}>Email: </Text>
            <TextInput
              style={styles.inpute}
              placeholder="Digite seu email"
              placeholderTextColor={"#ababab"}
              value={email}
              onChangeText={(email) => {setEmail(email)}}
            />

            <Text style={styles.txtInput}>Senha: </Text>
            <TextInput
              style={styles.inpute}
              placeholder="Digite sua senha"
              placeholderTextColor={"#ababab"}
              value={senha}
              onChangeText={(senha) => {setSenha(senha)}}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button}
            onPress={create}>
              <Text style={styles.logar}>Cadastrar</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

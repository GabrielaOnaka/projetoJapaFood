import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { NavLink } from "react-router-dom";
import Cadastro from "../cadastro/cad";

export default function TelaInicio({ navigation }) {
  const teste = "https://reactnative.dev/img/tiny_logo.png";
  const imageUrl =
    "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2FJAPA%60S%20(3).png?alt=media&";

  return (
    <View>
      <View style={styles.full}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../images/tela.png")}
            style={{ width: 400, height: 750 }}
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text >Acessar</Text>
          </TouchableOpacity>
          <View style={styles.conjunto}>
            <Text style={styles.txt}>
              Não possui Login?
              <TouchableOpacity style={styles.test}>
                <Text
                  style={styles.btn}
                  onPress={() => navigation.navigate(Cadastro)}
                >
                  Crie sua conta
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

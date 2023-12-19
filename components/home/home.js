import styles from "./styles";
import { View, TouchableOpacity, Image } from "react-native";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const hotRoll =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2F5.png?alt=media&token=99861128-9faf-42f9-a008-8b3ea986dff5&_gl=1*8lb2qz*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODQzMjY2OS4xMC4xLjE2OTg0MzI4MDQuNDYuMC4w";
const temaki =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2F4.png?alt=media&token=5f57e867-69c2-466f-88ba-a281dd8214a5&_gl=1*ximx5b*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODQzMjY2OS4xMC4xLjE2OTg0MzI4MDguNDIuMC4w";
const gunkan =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2F10.png?alt=media&token=59287d27-d44a-4d0e-8a0c-fc1d6e5e1733&_gl=1*18pnjy0*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODQzMjY2OS4xMC4xLjE2OTg0MzI4MTEuMzkuMC4w";
const sashimi =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2FConfira%20nossas%20barcas%20e%20combos!%20(9).png?alt=media&token=081f3cdf-9aa5-4125-accd-66df0e3b0ea4&_gl=1*156hzd8*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODM0NzE5OC45LjEuMTY5ODM0OTY1OS42MC4wLjA.";
const polvo =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2F7.png?alt=media&token=d3d39335-7f8c-4f24-8d40-55aba06cf323&_gl=1*92cnf1*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODQzMjY2OS4xMC4xLjE2OTg0MzI3OTguNTIuMC4w";
const nigiri =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2F9.png?alt=media&token=95542ae6-b135-42a9-a149-69baab6516cb&_gl=1*wzeyd4*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODQzMjY2OS4xMC4xLjE2OTg0MzI3OTAuNjAuMC4w";
const joeSushi =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2F8.png?alt=media&token=1b8b9550-5117-4117-98ae-0824668e816c&_gl=1*fqsz8o*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODQzMjY2OS4xMC4xLjE2OTg0MzI3OTUuNTUuMC4w";
const yakisoba =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2F6.png?alt=media&token=5628b5ec-ddfc-4bbf-953c-542492e26c74&_gl=1*xknu73*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODQzMjY2OS4xMC4xLjE2OTg0MzI4MDEuNDkuMC4w";

const barca =
  "https://firebasestorage.googleapis.com/v0/b/japafoods-somativa.appspot.com/o/imagens%2FConfira%20nossas%20barcas%20e%20combos!%20(7).png?alt=media&token=9f380464-018d-4c5b-a652-a69fd6e2c355&_gl=1*1xjamf2*_ga*MTc5Mjk3NTk4Ny4xNjk2NTI2MDY4*_ga_CW55HF8NVT*MTY5ODM0NzE5OC45LjEuMTY5ODM0OTYyNC4zLjAuMA..";

function SearchBar() {
  return (
    <VStack my="4" w="100%">
      <VStack w="100%" alignSelf="center">
        <Input
          placeholder="O que você procura?"
          variant="filled"
          width="100%"
          borderRadius="10"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.600"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}

function Example() {
  return (
    <Center flex={1}>
      <SearchBar />
    </Center>
  );
}

export default function Home () {
  return (
    <View style={styles.all}>
      <NativeBaseProvider>
        <Center>
          <Example />
        </Center>
      
      <View style={styles.containerImage}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: temaki }} style={styles.icone} />
          </TouchableOpacity>
          
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: hotRoll }} style={styles.icone} />
          </TouchableOpacity>
        </View>

        <View>
          
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: sashimi }} style={styles.icone} Text/> 
          </TouchableOpacity>

        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: polvo }} style={styles.icone} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: nigiri }} style={styles.icone} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: gunkan }} style={styles.icone} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: joeSushi }} style={styles.icone} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Image source={{ uri: yakisoba }} style={styles.icone} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerBarca}>
        <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
          <Image source={{ uri: barca }} style={styles.iconeBarca} />
        </TouchableOpacity>
      </View>
      </NativeBaseProvider>
    </View>
  );
}

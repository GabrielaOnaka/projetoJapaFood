import { Flex, SimpleGrid } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  all: {
    backgroundColor: "#FBC19D",
    width: "100%",
    height: "100%",
    display: "flex",
  },

  containerImage: {
    width: "100%",
    height: "50%",
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  },

  icone: {
    width: "155px",
    height: "80px",
    opacity: 0.6,
    borderRadius: "10px"
  },

  iconeBarca: {
    width: "100%",
    height: "180px",
    
    borderRadius: "10px"
  },

  containerBarca: {
    width: "100%",
    height: "40%",
    padding: "20px",
  },
});

export default styles;

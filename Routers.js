import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaInicio from "./components/telaInicio/Inicio";
import { Feather, Ionicons } from "@expo/vector-icons";
import Cadastro from "./components/cadastro/cad";
import Log from "./components/login/log";
import Home from "./components/home/home";

const Pilha = createStackNavigator();
const Nav = createBottomTabNavigator();

function NavBar() {
  return (
    <Nav.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FCFBF0",
          borderTopColor: "transparent",
          paddingBottom: 1,
          paddingTop: 1,
        },
        tabBarActiveTintColor: "#D81E1E",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Nav.Screen
        name="TelaInicio"
        component={TelaInicio}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="smartphone" size={size} color={color} />
          ),
        }}
      />
      <Nav.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="smartphone" size={size} color={color} />
          ),
        }}
      />
      <Nav.Screen
        name="Login"
        component={Log}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="smartphone" size={size} color={color} />
          ),
        }}
      />
      <Nav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="smartphone" size={size} color={color} />
          ),
        }}
      />
    </Nav.Navigator>
  );
}

export default function Routers() {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen
          name="NavBar"
          component={NavBar}
          options={{ title: true, headerShown: false }}
        />

        <Pilha.Screen
          name="telaInicio"
          component={TelaInicio}
          options={{ title: true, headerShown: false }}
        />
        <Pilha.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: true, headerShown: false }}
        />
        <Pilha.Screen
          name="Login"
          component={Log}
          options={{ title: true, headerShown: false }}
        />
        <Pilha.Screen
          name="Home"
          component={Home}
          options={{ title: true, headerShown: false }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}

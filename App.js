import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./src/screens/Landing";
import HomeScreen from "./src/screens/Home";
import Login from "./src/screens/Login";

function App() {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Landing Screen" component={Landing} />
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Login" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

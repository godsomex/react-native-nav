import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import Landing from "./src/screens/Landing";
import HomeScreen from "./src/screens/Home";
import Login from "./src/screens/Login";

function App() {
  const RootStack = createStackNavigator();
  const [isAuth, setIsAuth] = useState(false);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuth ? (
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerRight: () => (
                <Button title="Log Out" onPress={() => setIsAuth(false)} />
              ),
            }}
          ></RootStack.Screen>
        ) : (
          <>
            <RootStack.Screen name="Landing Screen" component={Landing} />
            <RootStack.Screen name="Login">
              {(props) => <Login {...props} setIsAuth={setIsAuth} />}
            </RootStack.Screen>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

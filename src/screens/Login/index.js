import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        onPress={() => {
          props.setIsAuth(true);
        }}
        title="Home"
      />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

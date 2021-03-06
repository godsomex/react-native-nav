import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function Landing(props) {
  return (
    <View style={styles.container}>
      <Text>Landing screen</Text>
      <Button
        onPress={() => props.navigation.navigate("Login")}
        title="Login"
      />
    </View>
  );
}

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

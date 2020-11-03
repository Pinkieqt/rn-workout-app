import React, { useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  StatusBar,
} from "react-native";
import { AuthContext } from "../utilities/authContext";

function SettingsScreen(props) {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text>SettingsScreen</Text>
      <Button
        color="dodgerblue"
        title="Odhlásit se"
        onPress={() => signOut()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;

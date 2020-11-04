import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Button,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function RecordsUpdateScreen(props) {
  const [max, setMax] = useState("0");
  const [work, setWork] = useState("0");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.exerciseCategory}>Front Squat</Text>
      <Text style={styles.exerciseWeight}>Pracovní váha</Text>
      <TextInput
        style={{ width: "70%", fontSize: 30, marginBottom: 30 }}
        placeholder="Kg"
        autoFocus={true}
        clearTextOnFocus={true}
        keyboardType="numeric"
        value={work}
        textAlign="center"
        // onFocus={() => setWork("")}
        onChangeText={(e) => {
          var num = e.replace(/[^0-9,]/g, "");
          setWork(num);
        }}
      />
      <Text style={styles.exerciseWeight}>Max váha</Text>
      <TextInput
        style={{ width: "70%", fontSize: 30, marginBottom: 30 }}
        placeholder="Kg"
        keyboardType="numeric"
        value={max}
        textAlign="center"
        // onFocus={() => setMax("")}
        onChangeText={(e) => {
          var num = e.replace(/[^0-9,]/g, "");
          setMax(num);
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <Button
          style={{ width: "45%" }}
          color="gray"
          title="Zrušit"
          onPress={() => props.navigation.goBack()}
        />
        <Button
          style={{ width: "45%" }}
          color="dodgerblue"
          title="Zapsat"
          onPress={() => alert(max)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
  },
  exerciseCategory: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  exerciseWeight: {
    fontSize: 20,
  },
});

export default RecordsUpdateScreen;

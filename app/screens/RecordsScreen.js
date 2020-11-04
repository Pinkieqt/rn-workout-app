import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ModalSelector from "react-native-modal-selector";

function RecordsScreen(props) {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState("Vse");
  const [selectedUser, setSelectedUser] = useState("Dudu");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={{ width: "100%" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.categorySubtitle, { marginBottom: 5 }]}>
            Vyber uživatele a stisknutím na kartu cviku můžeš editovat váhy.
          </Text>
          <Text style={[styles.categorySubtitle, { marginTop: 0 }]}>
            Můžeš si také zobrazit pouze vybranou svalovou partii.
          </Text>
          {/* Selector na uživatele a také muscle group */}
          <View style={styles.selectContainer}>
            <ModalSelector
              data={[
                { label: "Dudu", key: "Dudu" },
                { label: "Luke", key: "Luke" },
                { label: "Tom", key: "Tom" },
                { label: "Dejvo", key: "Dejvo" },
                { label: "Cahlik", key: "Cahlik" },
              ]}
              style={{ width: "40%" }}
              initValue={selectedUser}
              animationType="fade"
              cancelText="Zrušit"
              backdropPressToClose={true}
              optionTextStyle={{
                fontSize: 20,
                marginVertical: 10,
                color: "black",
              }}
              cancelTextStyle={{ fontSize: 15, marginVertical: 3 }}
              onChange={(option) => setSelectedUser(option.key)}
            />
            <ModalSelector
              data={[
                { label: "Všechny", key: "Vse" },
                { label: "Nohy", key: "Nohy" },
                { label: "Hrudník", key: "Hrudnik" },
                { label: "Ruce", key: "Ruce" },
                { label: "Záda", key: "Zada" },
                { label: "Ramena", key: "Ramena" },
              ]}
              style={{ width: "40%" }}
              initValue={selectedMuscleGroup}
              animationType="fade"
              cancelText="Zrušit"
              backdropPressToClose={true}
              optionTextStyle={{
                fontSize: 20,
                marginVertical: 10,
                color: "black",
              }}
              cancelTextStyle={{ fontSize: 15, marginVertical: 3 }}
              onChange={(option) => setSelectedMuscleGroup(option.key)}
            />
          </View>
        </View>

        {/* Karty */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("RecordsUpdateScreen")}
            style={{ width: "45%", margin: 5 }}
          >
            <View style={styles.card}>
              <View style={styles.cardCategory}>
                <Text style={styles.cardCategoryText}>
                  {selectedMuscleGroup}
                </Text>
              </View>
              <Text style={styles.exerciseCategory}>Front Squat</Text>
              <Text style={styles.exerciseWork}>Pracovní váha: 38 kg</Text>
              <Text style={styles.exerciseMax}>Max váha: 42 kg</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  selectContainer: {
    flex: 1,
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-evenly",
    marginBottom: 40,
  },
  categorySubtitle: {
    marginVertical: 30,
    fontSize: 15,
    width: "70%",
    textAlign: "center",
  },
  card: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    backgroundColor: "rgba(250, 0, 150, 0.05)",
  },
  cardCategory: {
    margin: 15,
    width: "40%",
    height: "20%",
    backgroundColor: "rgba(250, 0, 150, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
  },
  cardCategoryText: {
    textTransform: "uppercase",
    color: "#fff",
  },
  exerciseCategory: {
    marginLeft: 18,
    fontSize: 18,
    fontWeight: "bold",
  },
  exerciseWork: {
    marginLeft: 18,
    fontSize: 16,
  },
  exerciseMax: {
    marginLeft: 18,
    fontSize: 16,
  },
});

export default RecordsScreen;

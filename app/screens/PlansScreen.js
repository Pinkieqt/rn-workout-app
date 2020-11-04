import React from "react";
import { StyleSheet, SafeAreaView, Text, StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

function PlansScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ marginVertical: 15, fontSize: 30 }}>
            PPL Workout plan
          </Text>
          <Text style={styles.categorySubtitle}>
            PPL program znamená Push/Pull/Legs. Cvičení tedy probíhá 3 dny po
            sobě.
          </Text>
          <Text style={styles.categorySubtitle}>
            Přestávka může být mezi jednotlivými cykly (P/P/L/rest/P/P/L/rest)
            nebo se cvičí cykly po sobě (P/P/L/P/P/L/rest/rest).
          </Text>

          {/* Prvni ckylus */}
          <View style={tableStyle.container}>
            <View style={tableStyle.tableHeadRow}>
              <Text style={tableStyle.tableHeadText}>První cyklus</Text>
            </View>
            <View style={tableStyle.tableRow}>
              <Text style={tableStyle.tableItemText}>
                Pavel Jiříček (29/03)
              </Text>
              <Text style={tableStyle.tableItemText}>3x8</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const tableStyle = StyleSheet.create({
  container: { flex: 1, width: "70%", marginVertical: 30 },
  tableRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  tableHeadRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(50, 30, 250, 1)",
  },
  tableHeadText: { fontSize: 17 },
  tableItemText: { textAlign: "center" },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: { width: "100%" },
  categoryTitle: {
    marginVertical: 30,
    fontSize: 30,
    marginBottom: -20,
  },
  categorySubtitle: {
    marginVertical: 10,
    fontSize: 15,
    width: "70%",
    textAlign: "center",
  },
  cardBg: {
    width: "100%",
  },
});

export default PlansScreen;

import React from "react";
import { StyleSheet, SafeAreaView, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import LineChartComponent from "../charts/LineChartComponent";
import BarChartComponent from "../charts/BarChartComponent";
import RingChartComponent from "../charts/RingChartComponent";
import HeatMapComponent from "../charts/HeatMapComponent";

function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={["white", "#fafafa"]}
          style={{
            alignItems: "center",
            width: "100%",
            height: 300,
            backgroundColor: "#212121",
          }}
        >
          {/* Karty */}
          <Text style={{ marginVertical: 15, fontSize: 30 }}>Dashboard</Text>
          <View style={styles.cardStack}>
            <View style={styles.leftCard}>
              <Text style={styles.cardTitle}>celkem</Text>
              <Text style={styles.cardText}>630</Text>
            </View>
            <View style={styles.rightCard}>
              <Text style={styles.cardTitle}>rozdíl příchodů</Text>
              <Text style={styles.cardText}>-21</Text>
            </View>
          </View>
          <View style={styles.cardStack}>
            <View style={styles.leftCard}>
              <Text style={styles.cardTitle}>tento rok</Text>
              <Text style={styles.cardText}>105</Text>
            </View>
            <View style={styles.rightCard}>
              <Text style={styles.cardTitle}>poslední příchod</Text>
              <Text style={styles.cardText}>22/10</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={{ alignItems: "center" }}>
          {/* Příchody */}
          <Text style={styles.categoryTitle}>Příchody</Text>
          <Text style={styles.categorySubtitle}>
            V grafu níže lze pozorovat měsíční srovnání příchodů v jednotlivých
            letech.
          </Text>
          <LineChartComponent />

          {/* Příchody jednotlivých členů */}
          <Text style={styles.categorySubtitle}>
            Příchody jednotlivých členů
          </Text>
          <BarChartComponent />

          {/* Ring tentorok příchody */}
          <Text style={styles.categorySubtitle}>
            Příchody členů tento měsíc
          </Text>
          <RingChartComponent />

          {/* Poslední příchody */}
          <Text style={styles.categorySubtitle}>Poslední příchody</Text>

          {/* Heat mapa TADY MUSÍ BÝT SPODNI MARGIN KVULI ANDROIDU*/}
          {/* <Text style={[styles.categorySubtitle, { marginBottom: 120 }]}>
            Heat mapa příchodů pro nynější rok
          </Text>
          <HeatMapComponent /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  cardStack: {
    width: "100%",
    height: "38%",
    flexDirection: "row",
  },
  leftCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(150, 150, 150, 0.05)",
    margin: 10,
    marginRight: 0,
    borderRadius: 5,
  },
  rightCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(150, 150, 150, 0.05)",
    margin: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 15,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 40,
  },
  categoryTitle: {
    marginVertical: 30,
    fontSize: 30,
    marginBottom: -20,
  },
  categorySubtitle: {
    marginVertical: 30,
    fontSize: 15,
    width: "70%",
    textAlign: "center",
  },
});

export default HomeScreen;

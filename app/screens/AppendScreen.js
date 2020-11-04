import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  View,
  Button,
} from "react-native";
import { Switch } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";

function AppendScreen(props) {
  const [dudu, setDudu] = useState(false);
  const [luke, setLuke] = useState(false);
  const [tom, setTom] = useState(false);
  const [dejvo, setDejvo] = useState(false);
  const [cahlik, setCahlik] = useState(false);

  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.categorySubtitle}>
        Níže lze vybrat jiné datum pro pozdější zápisy.
      </Text>

      <DatePicker
        style={{ width: "30%" }}
        date={date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        confirmBtnText="Potvrdit"
        cancelBtnText="Zrušit"
        showIcon={false}
        onDateChange={(date) => setDate(date)}
      />

      <Text style={[styles.categorySubtitle, { marginTop: 15 }]}>
        Klikni na členy, kteří dnes přišli do posilovny a ulož změny. O
        provedených změnách budeš informován.
      </Text>
      <View style={styles.switchContainer}>
        <View style={styles.switchItem}>
          <Text style={styles.switchItemText}>Dudu</Text>
          <Switch onValueChange={(e) => setDudu(e)} value={dudu} />
        </View>
        <View style={styles.switchItem}>
          <Text style={styles.switchItemText}>Luke</Text>
          <Switch onValueChange={(e) => setLuke(e)} value={luke} />
        </View>
        <View style={styles.switchItem}>
          <Text style={styles.switchItemText}>Tom</Text>
          <Switch onValueChange={(e) => setTom(e)} value={tom} />
        </View>
        <View style={styles.switchItem}>
          <Text style={styles.switchItemText}>Dejvo</Text>
          <Switch onValueChange={(e) => setDejvo(e)} value={dejvo} />
        </View>
        <View style={styles.switchItem}>
          <Text style={styles.switchItemText}>Cahlik</Text>
          <Switch onValueChange={(e) => setCahlik(e)} value={cahlik} />
        </View>
      </View>

      <Button
        color="dodgerblue"
        title="Uložit změny"
        onPress={() => alert(dudu)}
      />
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
  switchContainer: {
    width: "70%",
    height: 200,
    marginBottom: 50,
  },
  switchItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "rgba(150, 150, 150, 0.2)",
    width: "100%",
    height: "20%",
  },
  switchItemText: {
    fontSize: 20,
  },
  categoryTitle: {
    marginVertical: 30,
    fontSize: 30,
    marginBottom: -20,
  },
  categorySubtitle: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 15,
    width: "70%",
    textAlign: "center",
  },
  btn: {},
});

export default AppendScreen;

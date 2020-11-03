import React, { useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import PlansScreen from "./app/screens/PlansScreen";
import RecordsScreen from "./app/screens/RecordsScreen";
import AppendScreen from "./app/screens/AppendScreen";
import SplashScreen from "./app/screens/SplashScreen";
import { AuthContext } from "./app/utilities/authContext";
import SettingsScreen from "./app/screens/SettingsScreen";
import { Button, StatusBar, StyleSheet } from "react-native";
// StatusBar.setBarStyle("dark-content");
import { MaterialHeaderButtons, Item } from "./app/utilities/HeaderButtons";
import AddWeightScreen from "./app/screens/AddWeightScreen";
import { AntDesign } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const DashboardStack = createStackNavigator();
const PlansStack = createStackNavigator();
const ReecordsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const DashboardStackScreen = (props) => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name="Dashboard"
      component={HomeScreen}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "transparent",
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: "#fff",
        headerRight: () => (
          <MaterialHeaderButtons>
            <Item
              title="addarrival"
              iconName="addusergroup"
              onPress={() => props.navigation.navigate("AppendScreen")}
            />
            <Item
              title="addweight"
              iconName="skin"
              onPress={() => props.navigation.navigate("AddWeightScren")}
            />
            <Item
              title="changetheme"
              iconName="eyeo"
              onPress={() => alert("Change theme!")}
            />
          </MaterialHeaderButtons>
        ),
      }}
    />
    <DashboardStack.Screen
      name="AppendScreen"
      component={AppendScreen}
      options={{ title: "Přidání příchodu" }}
    />
    <DashboardStack.Screen
      name="AddWeightScren"
      component={AddWeightScreen}
      options={{ title: "Přidání váhy" }}
    />
  </DashboardStack.Navigator>
);

const PlansStackScreen = (props) => (
  <PlansStack.Navigator>
    <PlansStack.Screen
      name="PlansScreen"
      component={PlansScreen}
      options={{
        title: "Plány",
      }}
    />
  </PlansStack.Navigator>
);

const RecordsStackScreen = (props) => (
  <ReecordsStack.Navigator>
    <ReecordsStack.Screen
      name="RecordsScreen"
      component={RecordsScreen}
      options={{
        title: "Váhy",
      }}
    />
  </ReecordsStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{ title: "Profil" }}
    />
  </SettingsStack.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("asd");

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        // setIsLoading(false);
        setUserToken("asd");
      },
      signOut: () => {
        // setIsLoading(true);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "HomeScreen") {
                  iconName = "home";
                } else if (route.name === "PlansScreen") {
                  iconName = "layout";
                } else if (route.name === "RecordsScreen") {
                  iconName = "linechart";
                } else if (route.name === "SettingsScreen") {
                  iconName = "user";
                }

                // You can return any component that you like here!
                return <AntDesign name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "dodgerblue",
              inactiveTintColor: "gray",
              showLabel: true,
              labelPosition: "below-icon",
            }}
          >
            <Tabs.Screen
              name="HomeScreen"
              component={DashboardStackScreen}
              options={{ title: "Dashboard" }}
            />
            <Tabs.Screen
              name="PlansScreen"
              component={PlansStackScreen}
              options={{ title: "Plány" }}
            />
            <Tabs.Screen
              name="RecordsScreen"
              component={RecordsStackScreen}
              options={{ title: "Váhy" }}
            />
            <Tabs.Screen
              name="SettingsScreen"
              component={SettingsStackScreen}
              options={{ title: "Profil" }}
            />
          </Tabs.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="SignIn"
              component={LoginScreen}
              options={{ title: "Přihlášení" }}
            />
            {/* <AuthStack.Screen name="HomeScreen" component={HomeScreen}  options={{ title: "Dashboard" }} /> */}
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    // alignItems: 'center',
    justifyContent: "center",
  },
  nav: {
    backgroundColor: "dodgerblue",
  },
});

// export default function App() {

//   return (
//     <HomeScreen />
//     // <SafeAreaView style={styles.container}>
//     //   <View style={{backgroundColor: "gold", flex: 1, height: 100}}/>
//     //   <View style={{backgroundColor: "red", flex: 2, height: 100}}/>
//     //   <View style={{backgroundColor: "blue", flex: 1, height: 100}}/>
//     // </SafeAreaView>

//     // <SafeAreaView style={styles.container}>
//     //   <View style={{backgroundColor: "dodgerblue", width: "100%", height: "20%"}}>
//     //   </View>
//     //   {/* <Button
//     //     title="Click me"
//     //     onPress={() => Alert.alert("Přidat uživtele?", "Chcete vážně přidat uživatele?", [{text: "Yes"}, {text: "No"}])}/> */}

//     //   {/* <StatusBar style="inverted" /> */}
//     // </SafeAreaView>
//   );
// }

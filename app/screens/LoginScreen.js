import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, Button } from 'react-native';
import {AuthContext} from "../utilities/authContext";

function LoginScreen(props) {

    const {signIn} = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={{ fontSize: 50, fontWeight: "bold" }}>ezWorkout</Text>
                <TextInput style={{ fontSize: 20, marginVertical: 30  }}secureTextEntry={true} placeholder="Password" autoCompleteType="password"></TextInput>
                <Button color="dodgerblue" title="Login" onPress={() => signIn()}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#e8e8e8",
        alignItems: "center",
        justifyContent: "center"
    },
})

export default LoginScreen;
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function SplashScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Loading...</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SplashScreen;
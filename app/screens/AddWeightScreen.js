import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function AddWeightScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>AddWeightScreen</Text>
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

export default AddWeightScreen;
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function RecordsScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>RecordsScreen</Text>
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

export default RecordsScreen;
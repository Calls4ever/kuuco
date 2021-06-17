import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
const Home =()=>{
    return(
        <View
        style={styles.container}
        >
            <Text>
                Hi From Home
            </Text>
        </View>
    )
}
const styles =StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 38
    }
})
export default Home
import React from 'react'
import {View,Text,Image,Button, TextInput, Label, Link, StyleSheet} from 'react-native'

const Login=()=>{
    return(
        <View
        style ={styles.container}
        >
            <Text>
                Login
            </Text>
            <TextInput
            keyboardType="number-pad"
            placeholder='Phone Number or username'
            >
            </TextInput>
            <TextInput
            secureTextEntry
            placeholder="password"
            >
            </TextInput>
            <Button
            raised
            title="Login"
            >
                
            </Button>
            <Text>New to Kuuco? Create an account 
                <Button
                    title="here"
                ></Button></Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Login
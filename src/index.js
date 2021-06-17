import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Login from './screens/authScreen/Login'
import Auth from './screens/authScreen'
import { createStackNavigator } from '@react-navigation/stack'
import MainTab from './screens/tabScreens/Index'
const Stack =createStackNavigator()
const Kuuco=()=>{
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}

        >
            <Stack.Screen name='Auth' component={Auth}/>
            <Stack.Screen name='MainTab' component={MainTab}/>
        </Stack.Navigator>
    )
}
const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default Kuuco
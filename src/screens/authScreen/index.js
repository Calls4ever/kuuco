import React,{useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Option from './Option';
import Login from './Login';
const Stack = createStackNavigator()

const Auth=(props)=>{
    const [loggedIn, setLoggedIn]=useState(true)
    loggedIn && props.navigation.navigate('MainTab')
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name ='Option' component={Option}/>
            <Stack.Screen name ='Login' component={Login}/>
        </Stack.Navigator>
    )
}
export default Auth
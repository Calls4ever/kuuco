import React from 'react';
import {  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './homeScreen/Index';
import Search from './searchScreen/Index';
import Profile from './profileScreen/Index';
const Tab = createBottomTabNavigator()
const MainTab =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name='Home'
            component={Home}
            />
            <Tab.Screen
            name='Search'
            component={Search}
            />
            <Tab.Screen
            name="Profile"
            component={Profile}
            />
        </Tab.Navigator>
    )
}
export default MainTab
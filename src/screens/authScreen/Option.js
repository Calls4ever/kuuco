import React,{useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';


const Option=(props)=>{
    return(
        <View
        style={styles.container}
        >
            <TextInput
            placeholder='username or email address'
            raised
            >
            </TextInput>
            <Button
            title='login'
            >
            </Button>
            <TouchableOpacity
            onPress={()=>props.navigation.navigate('Login')}
            >
                <Text>Continue with phone number</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
    }
})
export default Option
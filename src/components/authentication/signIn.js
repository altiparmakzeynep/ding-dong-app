import React, { Component } from 'react';;
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { responsiveSize, PhoneHeight, PhoneWidth } from '../../config/env';

class signIn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style= {styles.inputsContainer}>
                    <TextInput 
                            style={styles.input}
                            placeholder='e-mail'
                            placeholderTextColor='black'
                            onChangeText={(value) => this.props.fullNameChange(value)}
                            />
                    <TextInput 
                            style={styles.input}
                            secureTextEntry
                            placeholder='password'
                            placeholderTextColor='black'
                            onChangeText={(value) => this.props.fullNameChange(value)}
                            />   
                </View>
                <TouchableOpacity
                        onPress={this.onSignUp}
                        style={styles.signInButton}>
                        <Text> sign in </Text> 
                </TouchableOpacity>
           </View> 
        )
   }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b3fbb6"
    },
    input:{
        borderWidth: 2,  
        borderColor: "green",
        borderRadius: 8,
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        margin: 7,
        textAlign: "center"
    },
    signInButton:{
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "green",
        backgroundColor: "green",
        width: PhoneWidth * 0.3,
        height: PhoneHeight * 0.05,
        marginTop: PhoneHeight * 0.02
    }
})
export default signIn;
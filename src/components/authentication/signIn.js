import React, { Component } from 'react';;
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { responsiveSize, PhoneHeight, PhoneWidth } from '../../config/env';
import { Actions } from 'react-native-router-flux';

class signIn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style= {styles.icon} 
                    source= {require("../../images/groceries.png")}/>
                <View style= {styles.inputsContainer}>
                    <TextInput 

                            style={styles.input}
                            placeholder='E-mail'
                            placeholderTextColor='black'
                            onChangeText=
                            {(value) => this.props.emailChange(value)}
                            />
                    <TextInput 
                            style={styles.input}
                            secureTextEntry
                            placeholder='Password'
                            placeholderTextColor='black'
                            onChangeText={(value) => this.props.passwordChange(value)}
                            />   
                </View>
                <TouchableOpacity                      
                        onPress={this.onSignUp}
                        style={styles.signInButton}>
                        <Text> Sign In </Text> 
                </TouchableOpacity>
                <Text style= {styles.questionText}>Don't you have an account?
                 <Text style= {styles.registerButton}
                       onPress = {() => Actions.signUp()}> Register</Text>
                </Text>
           </View> 
        )
   }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    inputsContainer:{
        borderWidth: 0,
        marginTop: PhoneHeight * 0.3
      
    },
    input:{
        borderWidth: 2,  
        borderColor: "#aed559",
        borderRadius: 24,
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        margin: 7,
        textAlign: "center"
    },
    signInButton:{
        justifyContent: "center" ,
        alignItems: "center",
        borderWidth: 0,
        borderRadius: 24,
        backgroundColor: "#90b6e1",
        width: PhoneWidth * 0.3,
        height: PhoneHeight * 0.05,
        marginTop: PhoneHeight * 0.02
    },
    icon:{
        width: responsiveSize(80),
        height: responsiveSize((80)),
        top: PhoneHeight * 0.25
    },
    questionText:{
      marginTop: PhoneHeight * 0.01,
       fontSize: responsiveSize(13)
    },
    registerButton:{
        fontSize: responsiveSize(13),
        color: "#ed5076",
        fontWeight: "bold"
    
    }
})
export default signIn;
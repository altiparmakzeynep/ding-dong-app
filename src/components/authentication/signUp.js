import React, { Component } from 'react';;
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { responsiveSize, PhoneHeight, PhoneWidth } from '../../config/env';
import { Actions } from 'react-native-router-flux';

class signUp extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return (
        <View style={styles.container}>
            <View style= {styles.inputsContainer}>
                <TextInput 
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.nameChange(value)}
                        />
                <TextInput 
                        style={styles.input}
                        placeholder='surname'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.surNameChange(value)}
                        />  
                <TextInput 
                        style={styles.input}
                        placeholder='e-mail'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.emailChange(value)}
                        />  
                <TextInput 
                        style={styles.input}
                        secureTextEntry
                        placeholder='password'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.passwordChange(value)}
                        />    
                <TextInput 
                        secureTextEntry
                        style={styles.input}
                        placeholder='password confirm'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.passwordConfirmChange(value)}
                        />    
            </View>
            <TouchableOpacity
                    onPress={this.onSignUp}
                    style={styles.signUpButton}>
                    <Text> sign up </Text> 
            </TouchableOpacity>
            <Text style= {styles.questionText}>Do you have an account?
                 <Text style= {styles.loginButton}
                       onPress = {() => Actions.signIn()}> Login</Text>
                </Text>
       </View> 
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    input:{
        borderWidth: 2,  
        borderColor: "#aed559",
        borderRadius: 20,
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        margin: 7,
        textAlign: "center"
    },
    signUpButton:{
        justifyContent: "center" ,
        alignItems: "center",
        borderWidth: 0,
        borderRadius: 24,
        backgroundColor: "#90b6e1",
        width: PhoneWidth * 0.3,
        height: PhoneHeight * 0.05,
        marginTop: PhoneHeight * 0.02
    },
    questionText:{
        marginTop: PhoneHeight * 0.01,
         fontSize: responsiveSize(13)
      },
      loginButton:{
          fontSize: responsiveSize(13),
          color: "#ed5076",
          fontWeight: "bold"
      
      }
})
export default signUp;
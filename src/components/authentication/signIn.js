import React, { Component } from 'react';;
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { responsiveSize, PhoneHeight, PhoneWidth } from '../config/env';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { signInClicked } from '../../actions/authenticationAction';

class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          phoneNumberValue: "",
          passwordValue: ""
        }
    }

  onSignIn = () => {
    console.log("bastı")
    this.props.signInClicked(this.state.phoneNumberValue, this.state.passwordValue)
  }
    
  onPhoneNumberChanged = (value) => this.setState({phoneNumberValue: value})
  onPasswordChanged = (value) => this.setState({passwordValue: value})

    render() {
      return (
        <View style= {styles.container}>
          <View style= {styles.logoContainer}>
          <Image
              style={styles.logo}
              source={require('../../images/logo.png')}
            />
          </View>
          <View style= {styles.inputsContainer}>
            <TextInput 
                placeholder= "phone number"
                placeholderTextColor='#00000029'
                style= {styles.input}
                onChangeText={(value) => this.onPhoneNumberChanged(value)}/>
            <TextInput 
                placeholder= "password"
                placeholderTextColor='#00000029'
                style= {styles.input}
                onChangeText={(value) => this.onPasswordChanged(value)}/>
          </View>
          <View style= {styles.loginButtonContainer}>
            <TouchableOpacity 
                style= {styles.loginButton}
                onPress= {() => this.onSignIn()}>
              <Text style= {styles.loginText}>login</Text>
            </TouchableOpacity>
            {/* <Text> Hesabın yok mu? <Text onPress= {() => Actions.signUp()}> signup </Text></Text> */}
          </View>
        </View>   
      )
   }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f4fff1",
        justifyContent: "center",
    },
    logo:{
      marginBottom: "30%",
      width: responsiveSize(100),
      height: responsiveSize(100),
      resizeMode: "contain"
    },
    inputsContainer:{
        borderWidth: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        borderTopWidth: 0, 
        margin: PhoneHeight * 0.01, 
        borderColor: "gray",
        borderRadius: 24,
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        backgroundColor: "white",
        textAlign: "center",
        shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7
    },
    loginButtonContainer:{
      borderWidth: 0,
      marginTop: PhoneHeight * 0.05,
      alignItems: "center",
      justifyContent: "center",
    },
    loginButton:{
      borderWidth: 0,
      borderRadius: 12,
      justifyContent: "center",
      backgroundColor: "#1b7e00",
      width: PhoneWidth * 0.45,
      height: PhoneHeight * 0.05,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    loginText:{
      color: "#fff",
      alignSelf: "center",
      fontSize: responsiveSize(15)
    }
 
})
const mapStateToProps = state => {
    const { phoneNumberValue, passwordValue } = state.authenticationReducer;
    return {
      phoneNumberValue,
      passwordValue
    }
  }
  export default connect(
    mapStateToProps,
    {
      signInClicked
    }
  )(signIn)
import React, { Component } from 'react';;
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { responsiveSize, PhoneHeight, PhoneWidth } from '../../config/env';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { signInClicked} from '../../actions/authenticationAction';

class signIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          emailValue: "",
          passwordValue: ""
        }
    }

  onSignIn = () => {
    console.log("bastı")
    this.props.signInClicked(this.state.emailValue, this.state.passwordValue)
  }
    
  onEmailChanged = (value) => this.setState({emailValue: value})
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
                placeholder= "e-mail"
                placeholderTextColor='#00000029'
                style= {styles.input}
                onChangeText={(value) => this.onEmailChanged(value)}/>
            <TextInput 
                placeholder= "password"
                placeholderTextColor='#00000029'
                style= {styles.input}
                onChangeText={(value) => this.onPasswordChanged(value)}/>
          </View>
          <View style= {styles.loginButtonContainer}>
            <TouchableOpacity 
                onPress= {this.onSignIn()}
                style= {styles.loginButton}>
              <Text style= {styles.loginText}>login</Text>
            </TouchableOpacity>
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
        textAlign: "center"
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
    },
    loginText:{
      color: "#fff",
      alignSelf: "center",
      fontSize: responsiveSize(15)
    }
 
   
})
const mapStateToProps = state => {
    const { emailValue,passwordValue } = state.authenticationReducer;
    return {
      emailValue,
      passwordValue
    }
  }
  export default connect(
    mapStateToProps,
    {
      signInClicked
    }
  )(signIn)
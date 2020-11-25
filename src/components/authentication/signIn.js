import React, { Component } from 'react';;
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { responsiveSize, PhoneHeight, PhoneWidth } from '../../config/env';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import {googleLogin, facebookLogin,signInClicked } from './../../actions/authenticationAction';

class signIn extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){ 
        GoogleSignin.configure({
    })
}
   
    googleSignIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };

      handleFacebookLogin = () => {
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function(result) {
              if (result.isCancelled) {
                console.log("Login cancelled");
              } else {
                console.log(
                  "Login success with permissions: " +
                    result.grantedPermissions.toString()
                );
              }
            },
            function(error) {
              console.log("Login fail with error: " + error);
            }
          );
      }; 
  onSignIn = () => this.props.signInClicked(this.state.emailValue, this.state.passwordValue)
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style= {styles.icon} 
                    source= {require("../../images/logo.png")}/>
                <View style= {styles.inputsContainer}>
                    <TextInput 

                            style={styles.input}
                            placeholder='Telefon'
                            placeholderTextColor='black'
                            onChangeText=
                            {(value) => this.props.emailChange(value)}
                            />
                    <TextInput 
                            style={styles.input}
                            secureTextEntry
                            placeholder='Şifre'
                            placeholderTextColor='black'
                            onChangeText={(value) => this.props.passwordChange(value)}
                            /> 
                                  <Text style= {styles.forgotPassButton}
                       onPress = {() => Actions.signUp()}> Şifremi Unuttum</Text>  
                </View>
          
                <TouchableOpacity                      
                        onPress={this.onSignIn}
                        style={styles.signInButton}>
                        <Text style={styles.signInText}>Giriş Yap</Text>
                </TouchableOpacity>
                <Text style= {styles.questionText}>Üye değil misin?
                 <Text style= {styles.registerButton}
                       onPress = {() => Actions.signUp()}> Üye Ol</Text>
                </Text>
                {/* <TouchableOpacity                      
                        onPress={this.googleSignIn}
                        style={styles.googleButton}>
                        <Text style={styles.googleButtonText}>Google</Text> 
                </TouchableOpacity> */}
                <GoogleSigninButton
                    style={styles.googleButton}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.googleSignIn}
                    />
                {/* <TouchableOpacity                      
                        onPress={this.onSignUp}
                        style={styles.facebookButton}>
                        <Text style={styles.signInText}>Facebook</Text> 
                </TouchableOpacity> */}
                        <View>
                        <LoginButton
                        onPress= {this.handleFacebookLogin}
                        style={styles.facebookButton}
                        onLoginFinished={
                            (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    console.log("acces token: ", data.accessToken.toString())
                                    console.log("userID: ", dataş)
                                   
                                }
                                )
                            }
                            }
                        }
                        onLogoutFinished={() => console.log("logout.")}/>
                     </View>
           </View> 
           
        )
   }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    inputsContainer:{
        borderWidth: 0,
        marginTop: PhoneHeight * 0.2
    },
    input:{
        borderWidth: 1,  
        borderColor: "gray",
        borderRadius: 12,
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
        backgroundColor: "#000",
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        marginTop: PhoneHeight * 0.02
    },
    icon:{
        width: responsiveSize(64),
        height: responsiveSize(75),
        top: PhoneHeight * 0.15,
    },
    questionText:{
      marginTop: PhoneHeight * 0.01,
       fontSize: responsiveSize(13)
    },
    registerButton:{
        fontSize: responsiveSize(13),
        fontWeight: "bold"
    
    },
    signInText:{
        color:"#fff",
        fontWeight: "bold"
    },
    forgotPassButton:{
       fontWeight: "bold",
       alignSelf: "flex-end"
    },
    googleButton:{
        backgroundColor: "#fff",
        borderColor: "red",
        justifyContent: "center" ,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 24,
        width: PhoneWidth * 0.72,
        height: PhoneHeight * 0.06,
        marginTop: PhoneHeight * 0.05
    },
    facebookButton:{
        backgroundColor: "#3d53c8",
        justifyContent: "center" ,
        alignItems: "center",
        borderWidth: 0,
        borderRadius: 24,
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        marginTop: PhoneHeight * 0.02
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
      facebookLogin,
      googleLogin,
      signInClicked
    }
  )(signIn)
import React, { Component } from 'react';;
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { responsiveSize, PhoneHeight, PhoneWidth } from '../../config/env';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fullNameChange,emailChange, passwordChange , passwordConfirmChange, signUpClicked} from '../../actions/authenticationAction';

class signUp extends Component {
    constructor(props) {
        super(props);
        this.state= {
            genderData: ["Kadın", "Erkek"],
            checked: 0
        }
    }
render() {
    return (
        <View style={styles.container}>
            <Image
                    style= {styles.icon} 
                    source= {require("../../images/logo.png")}/>
            <View style= {styles.inputsContainer}>
                <TextInput 
                        style={styles.input}
                        placeholder='Ad Soyad'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.fullNameChange(value)}
                        /> 
                <TextInput 
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.emailChange(value)}
                        />  
                <TextInput 
                        style={styles.input}
                        secureTextEntry
                        placeholder='Password'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.passwordChange(value)}
                        />    
                <TextInput 
                        secureTextEntry
                        style={styles.input}
                        placeholder='Password Confirm'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.passwordConfirmChange(value)}
                        />  
                 <TextInput 
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.nameChange(value)}
                        />
                 <TextInput 
                        style={styles.input}
                        placeholder='name'
                        placeholderTextColor='black'
                        onChangeText={(value) => this.props.nameChange(value)}
                        />  
            </View>
            { 
          this.state.genderData.map((genderData, key) => {
              return(
                  <View style= {styles.radioButtonsContainer}>
                      <TouchableOpacity style= {styles.radio}>
                     
                      </TouchableOpacity>
                      <Text style= {styles.gender}>{genderData}</Text>
                  </View>
              )
          })}
            <TouchableOpacity
                    onPress={this.onSignUp}
                    style={styles.signUpButton}>
                    <Text style={styles.signUpText}>Üye Ol </Text> 
            </TouchableOpacity>
            <Text style= {styles.questionText}>Zaten üye misin?
                 <Text style= {styles.loginButton}
                       onPress = {() => Actions.signIn()}> Giriş Yap</Text>
                </Text>
       </View> 
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
    },
    icon:{
        width: responsiveSize(64),
        height: responsiveSize(75),
        top: PhoneHeight * 0.10
    },
    inputsContainer:{
        borderWidth: 0,
        marginTop: PhoneHeight * 0.13
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
    signUpButton:{
        justifyContent: "center" ,
        alignItems: "center",
        borderWidth: 0,
        borderRadius: 24,
        backgroundColor: "#000",
        width: PhoneWidth * 0.7,
        height: PhoneHeight * 0.05,
        marginTop: PhoneHeight * 0.04 
    },
    questionText:{
        marginTop: PhoneHeight * 0.01,
         fontSize: responsiveSize(13)
      },
      loginButton:{
          fontSize: responsiveSize(13),
          fontWeight: "bold"
      },
      signUpText:{
        color:"#fff"
    },
    radioButtonsContainer:{
        flexDirection: "row"
    },
    radio:{
        height: responsiveSize(15),
        width: responsiveSize(15),
        borderWidth:1,
        borderRadius: 60,
        margin: PhoneHeight * 0.005,
    },
    gender:{
        marginTop: PhoneHeight * 0.005,
     
    }
})
export default signUp;
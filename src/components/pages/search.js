import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,TextInput, Text, FlatList, Image} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';



class main extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return(
        <View style= {styles.container}>
           <View style= {styles.searchContainer}>
               <TextInput style= {styles.searchTxt}></TextInput>
               <TouchableOpacity style= {styles.searchBtn}>
                   <Image 
                      style= {styles.searchIcon}
                      source= {require("../../images/searchIcon.png")}/>
               </TouchableOpacity>

           </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4FFF1"
    },
    searchContainer: {
        justifyContent: "center",
        borderWidth: 0,
        width: PhoneWidth,
        height: PhoneHeight * 0.1
    },
    searchTxt: {
        borderWidth: 0,
        alignSelf: "center",
        borderRadius: 14,
        backgroundColor: "#fff",
        width: PhoneWidth * 0.75,
        height: PhoneHeight * 0.05
    },
    searchBtn: {
        borderWidth: 0,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: PhoneWidth * 0.1,
        height: PhoneHeight * 0.05,
        marginLeft: PhoneWidth * 0.77
        },
        searchIcon:{
           width: responsiveSize(25),
           height: responsiveSize(25),
        }

})
export default main;
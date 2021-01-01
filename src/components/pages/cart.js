import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth } from '../../config/env';



class main extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return(
        <View style= {styles.container}>
    
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    },

})
export default main;
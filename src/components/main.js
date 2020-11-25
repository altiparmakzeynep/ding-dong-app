import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth } from '../config/env';

const data = [
    {id: "1", backgroundColor: "cyan"},
    {id: "2", backgroundColor: "orange"},
    {id: "3", backgroundColor: "black"},
    {id: "4", backgroundColor: "red"},
]

class main extends Component {
    constructor(props) {
        super(props);
    }

cardRenderItem = ({ item }) => {
    return (
        <View style= {[styles.cardContainer, {backgroundColor: item.backgroundColor}]}>
            <Text> { item.title }</Text>
        </View>
    )
}

render() {
    return(
        <View style= {styles.container}>
            
            <View style= {styles.topInformation}/>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={this.cardRenderItem} />
            <View style= {styles.mainButtons}>
                <TouchableOpacity style= {styles.favs}>
                    <Text>Favorilerim</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {styles.newProducts}>
                    <Text>Yeni Ürünler</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {styles.campaigns}>
                    <Text>Fırsat Reyonu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    },
    topInformation:{
        backgroundColor: "white",
        alignSelf: "center",
        width: PhoneWidth,
        height: PhoneHeight * 0.2,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    cardContainer:{
        width: PhoneWidth,
        margin: 15,
        borderRadius: 20,
        height: PhoneHeight * 0.25,
        borderWidth: 2
    },
    mainButtons:{
        borderWidth: 0,
        flexDirection: "row",
        // alignSelf: "center",
        // marginTop: PhoneHeight * 0.20,
        top: -PhoneHeight * 0.25,
        justifyContent: "space-around",
        width: PhoneWidth * 1,
        height: PhoneHeight * 0.1,
        paddingHorizontal: PhoneHeight * 0.05
    },
    favs:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        width: PhoneWidth * 0.2,
        height: PhoneHeight * 0.1,
        borderRadius: 12,
    },
    newProducts:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        width: PhoneWidth * 0.2,
        height: PhoneHeight * 0.1,
        borderRadius: 12
    },
    campaigns:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        width: PhoneWidth * 0.2,
        height: PhoneHeight * 0.1,
        borderRadius: 12
    }

})
export default main;
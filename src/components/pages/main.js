import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../../config/env';

const data = [
    {
        id: 1,
        title: "Fruits and Vegetables",
        image : require('../../images/fruitsAndVegetables.jpg'),  
    },
    {
        id: 2,
        title: "Beverages",
        image : require('../../images/beverages.jpg'),
    },
    {
        id: 3,
        title: "Snacks",
        image : require('../../images/snacks.jpg'),
    },
    {
        id: 4,
        title: "Home Care",
        image : require('../../images/homeCare.jpg'),
    },
    {
        id: 5,
        title: "Food",
        image : require('../../images/food.jpg'),
    },
]

const Item = ({  title, image }) => (
    <TouchableOpacity style= {styles.item}>
    <Image style= {styles.image} 
           source= { image } />
    <Text style= {styles.title}> {title} </Text>
    </TouchableOpacity>
 
)
class Main extends Component {
    constructor(props) {
        super(props);
    }

renderItem = ({ item }) => (
    <Item title= {item.title}
          image= {item.image}
            />
    );
    render() {        
        return (
            <View style= {styles.container}>
                <FlatList
                    scrollEnabled= {false}
                    data= {data}
                    renderItem= {this.renderItem}
                    keyExtractor= {item => item.id}/>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
    },
    item: {
        flex: 1,
        borderWidth: 1,
        borderColor: "white",
        height: PhoneHeight * 0.180,
        alignItems: "center",
        justifyContent: "center",
 
        
      },
      title: {
        fontSize: responsiveSize(25),
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        position: "absolute"
      },
      image:{
        width: "100%",
        height: "100%",
        borderRadius: 30

      }
})

export default Main;    
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth, responsiveSize} from '../../config/env';

const categories = [
    { id: "1", title: "Vegetables" },
    { id: "2", title: "Fruits" },
    { id: "3", title: "Beverages" },
    { id: "4", title: "Snacks" },
    { id: "5", title: "Cosmetics" },
    { id: "6", title: "Homecare" }
]


class main extends Component {
    constructor(props) {
        super(props);
    }

categoriesRenderItem = ({item}) =>{
    return(
        <View >
            <TouchableOpacity   
          onPress={() => this.props.fetchProducts(item.id)}
          style= {styles.horizontalCategoriesBtn}>
      <Text style= {styles.categoriesName}>{item.title}</Text>
    </TouchableOpacity>
            </View>
    )
}
  render() {
    return(
        <View style= {styles.container}>
          <View>
            <FlatList  
                horizontal
                showsHorizontalScrollIndicator= {false}
                data={categories}  
                renderItem={this.categoriesRenderItem}/>
          </View>
          <View style= {styles.productsContainer}>
            <TouchableOpacity style= {styles.products}/>
            <TouchableOpacity style= {styles.products}/>
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
    categories:{
        borderWidth: 0,
        marginTop: PhoneHeight * 0.03,
        marginLeft: PhoneWidth * 0.06,
        width: PhoneWidth * 0.25,
        height: PhoneHeight * 0.13,
        borderRadius: 14,
        backgroundColor: "white"
       },
    categoriesTitle:{
        alignSelf: "center",
        fontSize: responsiveSize(13)
    },
     horizontalCategoriesBtn:{
        borderWidth: 0,
        height: PhoneHeight * 0.05,
        width: PhoneHeight * 0.1,
        justifyContent: "center"
      },
      categoriesName:{
          textAlign: "center"
      },
      productsContainer:{
          borderWidth: 1
      },
      products:{
        borderWidth: 0,
        marginTop: PhoneHeight * 0.03,
        marginLeft: PhoneWidth * 0.06,
        width: PhoneWidth * 0.4,
        height: PhoneHeight * 0.2,
        borderRadius: 14,
        backgroundColor: "pink"
      }
})
export default main;
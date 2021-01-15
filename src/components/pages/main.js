import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';
import { fetchCategories } from '../../actions/productsAction';
import { Actions } from 'react-native-router-flux';

const data = [
  { id: "1", title: "bu bir kampanya", backgroundColor: '#fefddb',uri:'https://envato-shoebox-0.imgix.net/0d80/552a-aceb-4181-bf08-49c70144d9e5/Goods-35.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=2f6fc6c7c3d02481ddd5a74a401fc4f7'  },
  { id: "2", title: "bu bir kampanya", backgroundColor: '#fbe8e7',uri:'https://envato-shoebox-0.imgix.net/8f42/9f4c-983e-4bf6-a731-22aaa077a810/IMG_7912.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=ee3910220eb35658fe4081fff890a79d'},
  { id: "3", title: "bu bir kampanya", backgroundColor: '##f2e5fd', uri:'https://envato-shoebox-0.imgix.net/673e/e016-3db3-46fd-880e-c15f03db6666/smporidge3.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=b7faa4619db6f2eba586f9a7fb36c98c' },
  { id: "4", title: "bu bir kampanya", backgroundColor: '#dff3fe', uri:'https://envato-shoebox-0.imgix.net/0d80/552a-aceb-4181-bf08-49c70144d9e5/Goods-35.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=2f6fc6c7c3d02481ddd5a74a401fc4f7' },
]

class main extends Component {
    componentWillMount() {
        this.props.fetchCategories()
      }
    constructor(props) {
        super();
    }

categoriesRenderItem = ({item}) =>{
    return(
        <View >
            <TouchableOpacity 
                onPress={() => this.props.fetchCategories(item.id) & Actions.products({cat_id: item.id})}
                style= {styles.categories}>
            <Image
                    style={{ borderRadius:14, height: PhoneHeight * 0.1, width: PhoneWidth * 0.25,}}
                        source={{
                          uri : item.image
                        }}
                    />
                <Text style= {styles.categoriesTitle}>{item.title}</Text>
            </TouchableOpacity>
         </View>
    )
}
  render() {
    const { categoriesValue } = this.props;

    return(
        <View style= {styles.container}>
         <View style= {styles.topContainer}>
          <TouchableOpacity style= {styles.topAddress}>
           <Text style= {styles.topAddresText}> ADRESS</Text>
           <View style= {styles.firstCampaign}></View>
           <View style= {styles.secondCampaign}>
             
           </View>
           <View style= {styles.thirdCampaign}></View>
           <View style= {styles.fourthCampaign}></View>
           <View>
           </View>
          </TouchableOpacity>
         </View>
         <View style= {styles.bottomContainer}>
             <Text style= {styles.categoriesText}>Categories</Text>
            <FlatList 
                numColumns= {3}
                data={categoriesValue}  
                renderItem={this.categoriesRenderItem}/>
         </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F4FFF1",
      alignItems: "center"
    },
    topContainer:{
      borderWidth: 0,
      padding: PhoneHeight * 0.04, 
      width: PhoneWidth,
      height: PhoneHeight * 0.45,
    },
    bottomContainer:{
      borderWidth: 0, 
      borderColor: "aqua",
      width: PhoneWidth,
      height: PhoneHeight * 0.4
    },
    categoriesText:{
      color: "#1F4B09",
      marginLeft: PhoneWidth * 0.06,
      fontSize: responsiveSize(20)
    },
    topAddress:{
      justifyContent: "center",
      borderWidth: 0,
      backgroundColor: "#fff",
      borderRadius: 24,
      width: PhoneWidth * 0.75,
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
    topAddresText:{
      color: "#1b7e00",
      alignSelf: "center",
      fontSize: responsiveSize(18)
    },
    categories:{
      borderWidth: 0,
      marginTop: PhoneHeight * 0.02,
      marginLeft: PhoneWidth * 0.06,
      width: PhoneWidth * 0.25,
      height: PhoneHeight * 0.13,
      borderRadius: 14,
      backgroundColor: "#fff",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
   },
    categoriesTitle:{
      alignSelf: "center",
      fontSize: responsiveSize(13),
    },
    firstCampaign:{
      borderWidth: 1,
      borderRadius: 19,
      width: PhoneWidth * 0.3,
      height: PhoneHeight * 0.2,
      top: PhoneHeight * 0.07,
      position: "absolute",
      justifyContent: "flex-start"
    },
    secondCampaign:{
      borderWidth: 1,
      borderColor: "red",
      borderRadius: 19,
      width: PhoneWidth * 0.3,
      height: PhoneHeight * 0.1,
      top: PhoneHeight * 0.45,
    },
    thirdCampaign:{
      borderWidth: 1,
      borderColor: "aqua",
      borderRadius: 19,
      width: PhoneWidth * 0.5,
      height: PhoneHeight * 0.1,
      top: PhoneHeight * 0.13,
      marginLeft: PhoneWidth * 0.35,
    },
    fourthCampaign:{
      borderWidth: 1,
      borderColor: "orange",
      borderRadius: 19,
      width: PhoneWidth * 0.5,
      height: PhoneHeight * 0.2,
      marginLeft: PhoneWidth * 0.35,
      top: PhoneHeight * 0.15,

    }
  

})
const mapStateToProps = state => {
    const { categoriesValue,cat_id } = state.productsReducer;

    return {
      categoriesValue,
      cat_id
    }
  }
  
  export default connect(
    mapStateToProps,
    {
      fetchCategories,
      
    }
  )(main)
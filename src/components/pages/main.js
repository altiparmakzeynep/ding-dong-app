import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';
import { fetchCategories } from '../../actions/productsAction';
import { Actions } from 'react-native-router-flux';

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
              source={{ uri : item.image }}/>
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
           <View style= {styles.firstPair}>
             <TouchableOpacity onPress= { () => Actions.campaign()} style= {styles.firstAd}>
             <Image
              style= {{  width: PhoneWidth * 0.4, height: PhoneHeight * 0.2, borderRadius:19 }}
              source={{uri: "https://elements-twenty20-photos-0.imgix.net/production/uploads/items/8f85d04f-ebc4-4dea-bb1b-3dcb87e02704/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=600&s=329c2af895efd5dda2019d201af4bd7a"}}/>
             </TouchableOpacity>
             <TouchableOpacity  onPress= { () => Actions.campaign()} style= {styles.secondAd}>
             <Image
              style= {{  width: PhoneWidth * 0.4, height: PhoneHeight * 0.2, borderRadius:19 }}
              source={{uri: "https://envato-shoebox-0.imgix.net/4e1a/6834-79fb-4097-b224-1c3c13bb406c/kvartyra-helen-306.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=600&s=8b371f700d3da304583cc5139a7b8e3e"}}/>
             </TouchableOpacity>
           </View>
           <View style= {styles.secondPair}>
           <TouchableOpacity  onPress= { () => Actions.campaign()} style= {styles.thirdAd}>
           <Image
              style= {{  width: PhoneWidth * 0.4, height: PhoneHeight * 0.2, borderRadius:19 }}
              source={{uri: "https://elements-twenty20-photos-0.imgix.net/production/uploads/items/a1dcd272-ba68-4609-95ac-399c15775229/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=600&s=6ed400dcf83182e03e39e14cb74a718b"}}/>
           </TouchableOpacity>
           <TouchableOpacity  onPress= { () => Actions.campaign()} style= {styles.fourthAd}>
           <Image
              style= {{  width: PhoneWidth * 0.4, height: PhoneHeight * 0.2, borderRadius:19 }}
              source={{uri: "https://envato-shoebox-0.imgix.net/3bbb/2629-c29b-49e2-b566-ee6b82f874ff/20160402-IMG_0075.JPG?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=400&s=8cc4ad934135fad82d3c0b354ee6fe5e"}}/>
           </TouchableOpacity>

           </View>
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
      width: PhoneWidth,
      height: PhoneHeight * 0.45,
    },
    firstPair:{
      borderWidth: 0,
      borderColor: "green",
      width: PhoneWidth,
      height: PhoneHeight * 0.225,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    firstAd:{
      borderWidth: 0,
      borderRadius: 19,
      width: PhoneWidth * 0.4,
      height: PhoneHeight * 0.2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    secondAd:{
      borderWidth: 0,
      borderRadius: 19,
      width: PhoneWidth * 0.4,
      height: PhoneHeight * 0.2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    secondPair:{
      borderWidth: 0,
      borderColor: "pink",
      width: PhoneWidth,
      height: PhoneHeight * 0.225,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    thirdAd:{
      borderWidth: 0,
      borderRadius: 19,
      width: PhoneWidth * 0.4,
      height: PhoneHeight * 0.2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    fourthAd:{
      borderWidth: 0,
      borderRadius: 19,
      width: PhoneWidth * 0.4,
      height: PhoneHeight * 0.2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
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
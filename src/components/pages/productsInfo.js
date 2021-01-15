import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,TextInput, Text, FlatList, Image} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';
import { fetchCategories, fetchProducts } from '../../actions/productsAction';

class productsInfo extends Component {
    constructor(props) {
        super(props);
    }
// productRenderItem = ({item}) => {
//     return(
//         <View>
//              <View style= {styles.infoContainer}>
//              <Text style= {styles.productName}>{item.title}</Text>
//          </View>
//         </View>
//     )
// }
  render() {
    const { productsValue } = this.props;

    return(
        <View style= {styles.container}>
        <View style= {styles.imgContainer}></View>
            <Image
                style={styles.productImg}
                source={{
                    uri : "https://elements-cover-images-0.imgix.net/ca395cdd-2525-4b9e-8764-148dc0db7e6d?auto=compress%2Cformat&fit=max&w=866&s=01ca284b4a95d13d3958ae12cdb60098"
                }}/>
         <View style= {styles.infoContainer}>
             <Text style= {styles.productName}>Chocolate</Text>
             <Text style= {{alignSelf: "center"}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</Text>
         </View>
           <FlatList 
                data={productsValue}  
                renderItem={this.productRenderItem}/>
         <View style= {styles.amountContainer}>
             <TouchableOpacity style= {styles.minusBtn}></TouchableOpacity>
             <Text style= {styles.amountInfo}>2</Text>
             <TouchableOpacity style= {styles.plusBtn}></TouchableOpacity>
             <Text style= {styles.productPrice}> Price: 200$</Text>
         </View>
         <View style= {styles.addContainer}>
             <TouchableOpacity style= {styles.favBtn}>
                 <Image 
                  style= {{width: responsiveSize(27), height: responsiveSize(27)}}
                  source={require('../../images/emptyHeart.png')}></Image>
             </TouchableOpacity>
             <TouchableOpacity style= {styles.addBtn}>
                 <Text style= {{fontSize: responsiveSize(22), color: "#fff", alignSelf: "center"}}>ADD</Text>
             </TouchableOpacity>
         </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    infoContainer:{
        borderTopLeftRadius: 19,
        borderTopRightRadius: 19,
        width:PhoneWidth, 
        height: PhoneHeight * 0.5,
        marginTop: PhoneHeight * 0.05,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
    },
    imgContainer:{
        borderWidth:0, 
        width: PhoneWidth,
        height: PhoneHeight * 0.4,
    },
    productImg:{
        width: responsiveSize(200),
        height: responsiveSize(200),
        position: "absolute",
        alignSelf: "center",
        marginTop: PhoneHeight * 0.05
    },
    productName:{
        fontSize: responsiveSize(30),
        alignSelf: "center",
        color: "#1B7E00"
    },
    amountContainer:{
        borderWidth: 0,
        width: PhoneWidth ,
        height: PhoneHeight * 0.07,
        position: "absolute",
        marginTop: PhoneHeight * 0.65,
        justifyContent: "center"
    },
    addContainer:{
        borderWidth: 0,
        width: PhoneWidth ,
        height: PhoneHeight * 0.07,
        position: "absolute",
        marginTop: PhoneHeight * 0.75,
        justifyContent: "center",
    },
    addBtn:{
        justifyContent: "center",
        position: "absolute",
        borderWidth: 0,
        borderRadius: 11,
        backgroundColor: "#1B7E00",
        width: PhoneWidth * 0.5,
        height: PhoneHeight * 0.05,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
        marginLeft: PhoneWidth * 0.4
    },
    favBtn:{
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        borderWidth: 0, 
        borderRadius: 11,
        width: PhoneWidth * 0.13,
        height: PhoneHeight * 0.05,
        marginLeft: PhoneWidth * 0.15,
        
    },
    productPrice:{
        marginLeft: PhoneWidth * 0.5,
        fontSize: responsiveSize(25),
        color: "#1B7E00"
    },
    minusBtn:{
        position: "absolute",
        borderWidth: 0,
        backgroundColor: "#1B7E00",
        borderTopLeftRadius: 11,
        borderBottomLeftRadius: 11,
        width: PhoneWidth * 0.1,
        height: PhoneHeight * 0.05,
        marginLeft: PhoneWidth * 0.1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
    },
    amountInfo:{
        position: "absolute",
        borderWidth: 1,
        borderColor: "#1B7E00",
        width: PhoneWidth * 0.1,
        height: PhoneHeight * 0.05,
        marginLeft: PhoneWidth * 0.2,
        fontSize: responsiveSize(25),
        textAlign: "center"
    },
    plusBtn:{
        position: "absolute",
        borderWidth: 0,
        backgroundColor: "#1B7E00",
        borderBottomRightRadius: 11,
        borderTopRightRadius: 11,
        width: PhoneWidth * 0.1,
        height: PhoneHeight * 0.05,
        marginLeft: PhoneWidth * 0.3,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
    }
})

const mapStateToProps = state => {
    const { categoriesValue, productsValue,cat_id, product_id} = state.productsReducer;

    return {
      productsValue,
      categoriesValue,
      cat_id,
      product_id
    }
  }
  
  export default connect(
    mapStateToProps,
    {
        
      fetchCategories,
      fetchProducts
    }
  )(productsInfo)
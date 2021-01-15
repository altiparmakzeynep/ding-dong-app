import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { PhoneWidth,PhoneHeight, responsiveSize } from '../../components/config/env';
import { removeToCart,removeAllCart, addToCart } from '../../actions/productsAction';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
 
  class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }
 cartRenderItem = ({ item }) => {
    return(
      <View style= {styles.allProducts}>
        <View style= {styles.productContainer}>
          <View style= {styles.imageContainer}>
                <Image style= {styles.productImages} 
                      source={{
                        uri : item.image
                      }}/>  
                <View style= {styles.textInfoContainer}>
                      <Text style= {styles.productNameTxt}>{item.title}</Text>
                      <Text style= {styles.priceTxt}> {item.price} {item.amount} </Text>
                </View>  
            <View style= {styles.plusAndMinusContainer}>  
                <View style= {styles.amountContainer}>
                        <TouchableOpacity 
                          onPress= {() => this.setState({ counter: this.state.counter - 1})}
                          style= {styles.plusContainer}>
                          <Image 
                            style= {styles.minusIcon}
                            source= {require("../../images/minus.png")}/>
                        </TouchableOpacity>
                        <View style= {styles.amountTxt}>
                          <Text> {this.state.counter} </Text>
                        </View>
                        <TouchableOpacity 
                            onPress= {() => this.setState({ counter: this.state.counter + 1})}
                            style= {styles.minusContainer}>
                            <Image 
                              style= {styles.plusIcon}
                              source= {require("../../images/plus1.png")}/>
                        </TouchableOpacity>  
                </View> 
                <View style= {styles.deleteContainer}>
                  <TouchableOpacity
                  onPress= {() => this.props.removeToCart(item) } >
                    <Image 
                      style= {styles.deleteIcon}
                      source= {require("../../images/trash-can.png")}/>
                  </TouchableOpacity>
                </View>   
            </View> 
          </View>
        </View>
      </View>
    )
  }
  render() {
    const {products, totalAmount} = this.props;
    return (
      <View style= {styles.container}>
      {     // It checks products which in cart
        this.props.products.length > 0 ?
       <Text> </Text> 
        :<Text style= {styles.cartIsEmptyTxt}>There are no items in your cart.</Text> 
      }
        <View style={styles.deleteAllContainer}>
          <TouchableOpacity 
            onPress= {this.props.removeAllCart}
            style= {{ padding:10 }}> 
           <Image 
            style= {styles.deleteAllPhoto}
           />
          </TouchableOpacity>
        </View>
        <FlatList
              bounces={true}
              numColumns={1}
              data={products}
              renderItem={this.cartRenderItem}
              keyExtractor={item => item.id}
            /> 
        <View style= {styles.totalBtnContainer}>
          <View style= {styles.totalCartBtn}> 
            <Text style= {styles.totalTxt}>Total: {this.state.counter * totalAmount} $ </Text>
          </View>
        </View>
        <View style= {styles.confirmBtnContainer}>
          <TouchableOpacity 
              onPress= {() => Actions.payment()}
              style= {styles.confirmCartBtn}> 
            <Text style= {styles.confirmTxt}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#F4FFF1"
    },
    productContainer:{
      alignSelf: "center",
      width: PhoneWidth * 0.9,
      height: PhoneHeight * 0.10,
      borderWidth: 0,
      borderColor:"#1B7E00",
      borderRadius: 19,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    amountContainer:{
      height: PhoneHeight * 0.03,
      width: PhoneWidth * 0.2,
    },
    plusContainer:{
      borderWidth: 0,
      backgroundColor: "#1B7E00",
      position: "absolute",
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      width: PhoneHeight * 0.03,
      height: PhoneHeight * 0.027,
      justifyContent: "center"
    },
    amountTxt:{
      borderWidth: 1,
      width: PhoneHeight * 0.04,
      height: PhoneHeight * 0.027,
      alignSelf: "center",
      alignItems: "center",
      borderColor: "#1B7E00"
    },
    minusContainer:{
      borderWidth: 0,
      backgroundColor: "#1B7E00",
      position: "absolute",
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      width: PhoneHeight * 0.03,
      height: PhoneHeight * 0.027,
      justifyContent: "center",
      marginLeft: PhoneWidth * 0.13
    },
    textInfoContainer:{
      borderWidth:0,
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.24,
      paddingHorizontal:10,
      justifyContent: "center",
    },
    plusAndMinusContainer:{
      flexDirection:'row',
      marginTop: PhoneHeight*0.03,
      borderWidth: 0
    },
    plusIcon:{
      alignSelf: "center",
      width: responsiveSize(10),
      height: responsiveSize(10)
    },
    minusIcon:{
      alignSelf: "center",
      width: responsiveSize(10),
      height: responsiveSize(10)
    },
    allProducts:{
      borderWidth:0,
      height: PhoneHeight * 0.12,
      width: PhoneWidth * 1,
      justifyContent: "center",
    },
    imageContainer:{
      borderRadius: 24,
      flexDirection:'row',
    },
    productImages:{
      width: PhoneWidth * 0.2,
      height: PhoneHeight * 0.095,
      borderRadius: 24,
    },
    deleteContainer:{
      height: PhoneHeight * 0.027,
      width: PhoneWidth * 0.07,
      borderWidth:0,
      borderColor: "black",
      justifyContent:'center'   ,
      marginLeft: PhoneWidth * 0.1
    },
    deleteIcon:{
      width: responsiveSize(20),
      height: responsiveSize(20),
    },
    confirmCartBtn:{
      borderWidth: 0,
      backgroundColor: "#1B7E00",
      width: PhoneWidth * 0.6,
      height: PhoneHeight * 0.05,
      borderRadius: 11,
      marginBottom: PhoneHeight * 0.04,
      alignSelf: "center",
      alignItems:'center',
      justifyContent:'center'
    },
    totalCartBtn:{
      borderWidth: 0,
      width: PhoneWidth * 0.35,
      height: PhoneHeight * 0.05,
      borderRadius: 11,
      backgroundColor: "#fff",
      justifyContent:'center',
      marginBottom: PhoneHeight * 0.01,
      marginLeft: PhoneHeight * 0.3,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    confirmTxt:{
      color:"#fff",
      fontSize:responsiveSize(17)
    },
    totalTxt:{
      color:"#1B7E00",
      alignSelf: "center",
      fontSize:responsiveSize(18),
      marginLeft: PhoneHeight * 0.01
    },
    deleteAllPhoto:{
      width: responsiveSize(26),
      height: responsiveSize(26),
    },
    deleteAllContainer:{
      justifyContent:'flex-end',
      alignItems:'flex-end'
    },
    cartIsEmptyTxt:{
      alignSelf:'center',
    }
})
const mapStateToProps = state => {
  const { products, totalAmount  } = state.productsReducer;
  return {
    products,
    totalAmount
  }
}
export default connect(
  mapStateToProps,
  {
    removeToCart,
    removeAllCart,
    addToCart
  }
)(cart)
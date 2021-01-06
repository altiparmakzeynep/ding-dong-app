import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { PhoneWidth,PhoneHeight, responsiveSize } from '../../components/config/env';
import { removeToCart,removeAllCart, addToCart } from '../../actions/productsAction';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { color } from 'react-native-reanimated';
import { Actions } from 'react-native-router-flux';
 
  class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          <View style= {styles.plusButtonContainer}>
                  <View style= {styles.plusContainer}>
                    <TouchableOpacity >
                      <Image 
                        style= {styles.plusIcon}
                        source= {require("../../images/plus1.png")}/>
                    </TouchableOpacity>
                  </View>
              <View style= {styles.minusContainer}>
                  <TouchableOpacity >
                    <Image 
                      style= {styles.minusIcon}
                      source= {require("../../images/minus.png")}/>
                  </TouchableOpacity>
              </View>  
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
    console.log("sepetteki ürünler: ", products)
    return (
      <View style= {styles.container}>
      {     //sepette ürün bulunmadığı durumları kontrol eder tasarımı eksik yapılacak 
        this.props.products.length > 0 ?
       <Text> </Text> 
        :<Text style= {styles.cartIsEmptyTxt}>Sepetinizde ürün bulunmamaktadır.</Text> 
      }
        <View style={styles.deleteAllContainer}>
          <TouchableOpacity 
            onPress= {this.props.removeAllCart}
            style= {styles.deleteAllBtn}> 
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
            <Text style= {styles.totalTxt}>Total: {totalAmount} $ </Text>
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
      borderWidth: 1,
      borderColor:"#1B7E00",
      borderRadius: 19,
      backgroundColor: "#fff",
    },
    plusButtonContainer:{
      height: PhoneHeight * 0.03,
      width: PhoneWidth * 0.2,
      borderWidth:2,
      borderRadius: 6,
      borderColor: "#1B7E00",
    },
      //ürün adı ve fiyat bilgisinin kutusu
    textInfoContainer:{
      borderWidth:0,
      height: PhoneHeight * 0.1,
      width: PhoneWidth * 0.24,
      paddingHorizontal:10,//sağındaki foto ile arasına 10px boşluk verir
      justifyContent: "center",//dikeyde yazıyı ve fiyatı ortalar
    },
    plusAndMinusContainer:{//artı ve eksi sembollerinin kutusunu bir view e aldım ki marginsiz ortalayabileyim diye
      flexDirection:'row',// artı, eksi, ve çarpıyı yan yana dizer.
      marginTop: PhoneHeight*0.03//3'ünü de dikeyde ortalar. 
    },
    allProducts:{
      borderWidth:0,
      height: PhoneHeight * 0.12,
      width: PhoneWidth * 1,
      justifyContent: "center",
    },
    imageContainer:{
      borderRadius: 24,
      flexDirection:'row',//ımage containerın içindeki her şeyi yatay dizer!!!
    },
    productImages:{
      width: PhoneWidth * 0.2,
      height: PhoneHeight * 0.095,
      borderRadius: 24,
    },
    plusContainer:{
      borderWidth: 0,
      backgroundColor: "red",
      height: PhoneHeight * 0.025,
      paddingHorizontal:7,//yatayda hafif bosluk verir ki sağdaki çirkin görünüm olmasın 
      justifyContent: "center",//artı butonunu dikeyde ortalar
      alignItems: "flex-end"//artı butonunun her şeyi (sağa yaslar)!!!
    },
    minusContainer:{
      borderWidth: 0,
      marginBottom: PhoneHeight * 0.3,//- yi yukarı cıkarabilmek için yazıldı başka bir yol bulamadım. Muhtemelen vardır. 
      width: PhoneWidth * 0.075,
      height: PhoneHeight * 0.025,
      paddingHorizontal:7,//yatayda hafif bosluk verir ki sağdaki çirkin görünüm olmasın 
      justifyContent: "center",
      position: "absolute"
    },
    deleteContainer:{
      height: PhoneHeight * 0.027,
      width: PhoneWidth * 0.05,
      borderWidth:0,
      paddingHorizontal:PhoneWidth*0.12,
      borderColor: "black",
      justifyContent:'center'   
    },
    plusIcon:{
      width: responsiveSize(12),
      height: responsiveSize(12),
    },
    minusIcon:{
      width: responsiveSize(12),
      height: responsiveSize(12),
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
      marginBottom: PhoneHeight * 0.02,//aşağıyla arasına cok hafif bosluk vermeye yarar
      alignSelf: "center",//kendini ort.
      alignItems:'center',//içindeki yazıyı yatayda ort.
      justifyContent:'center'//içindeki yazıyı dikeyde ort.
    },
    totalCartBtn:{
      borderWidth: 1,
      width: PhoneWidth * 0.35,
      height: PhoneHeight * 0.05,
      borderRadius: 11,
      borderColor: "#1B7E00",
      justifyContent:'center',//içindeki yazıyı dikeyde ort.
      marginBottom: PhoneHeight * 0.01,
      marginLeft: PhoneHeight * 0.3
    },
    confirmTxt:{
      color:"#fff",
      fontSize:responsiveSize(17)
      },
    totalTxt:{
      color:"#000",
      fontSize:responsiveSize(13),
      marginLeft: PhoneHeight * 0.01
    },
    deleteAllPhoto:{
      width: responsiveSize(26),
      height: responsiveSize(26),
    },
    deleteAllBtn:{
      padding:10
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
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth, responsiveSize} from '../config/env';
import { fetchCategories, fetchSubCategories, fetchProducts, addToCart, addToFavs, removeToFavs } from '../../actions/productsAction';
import { Actions } from 'react-native-router-flux';


class main extends Component {
  state = {
    checked: 0,
    isClicked: null
  }

  componentWillMount() {
    this.props.fetchSubCategories(this.props.cat_id)
    this.props.fetchProducts(this.props.product_id)
  }
    constructor(props) {
        super(props);
    }

subCategoriesRenderItem = ({item}) => {
  return(
    <View>
      <TouchableOpacity   
        onPress={() => this.props.fetchProducts(item.id)}
        style= {styles.horizontalCategoriesBtn}>
       <Text style= {styles.subCategoriesName}>{item.title}</Text>
    </TouchableOpacity>
  </View>
  )
}

productRenderItem = ({ item }) => {
  return(
    <View style= {styles.allProducts}>
      <TouchableOpacity 
          onPress={() => this.props.fetchProducts(item.id)}
          style= {styles.productContainer}>
        <Image style= {styles.productImages} 
               source={{
                uri : item.image
              }}/>
        <View style= {styles.productInfo} >
        <Text style= {{fontSize: responsiveSize(13)}}>{item.title}</Text>
        <Text style= {{fontSize: responsiveSize(10)}}>{item.desc}</Text>
        </View>
        <View style= {styles.priceTextContainer}>
        <TouchableOpacity 
        
           onPress= {() => 
         {  this.state.checked = this.state.checked + 1
             if(this.state.checked % 2 == 1) {
               this.props.addToFavs(item) 
               this.setState({
                 isClicked: true
               })
          }
          else{
            this.props.removeToFavs(item)
            this.setState({
              isClicked: false
            })
          }}
        }
           style= {styles.favIconContainer}>

           {
            this.state.isClicked == true ? 
            <Image style={styles.favIcon} source={require('../../images/fulHeart.png')} />:<Image style={styles.favIcon} source={require('../../images/emptyHeart.png')} />
           }
        </TouchableOpacity>
        <Text style= {styles.priceTxt}> {item.price} {item.amount}</Text>
        </View>
    </TouchableOpacity> 
    <View style= {styles.plusButtonContainer}>
      <TouchableOpacity 
          onPress= {() => this.props.addToCart(item) } >
        <Image 
            source={require('../../images/plus.png')}
            style= {styles.plusIcon}
          />
      </TouchableOpacity>
    </View>
  </View>
  )
}
  render() {
    const { subCategoriesValue, productsValue } = this.props;

    return(
        <View style= {styles.container}>
          <View>
            <FlatList  
                horizontal
                showsHorizontalScrollIndicator= {false}
                data={subCategoriesValue}  
                renderItem={this.subCategoriesRenderItem}/>
          </View>
          <View>
          <FlatList
          
              bounces={true}
              numColumns={2}
              data={productsValue}
              renderItem={this.productRenderItem}
              keyExtractor={item => item.id}/>
          </View>
          
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4FFF1",
        // alignItems: "center"
    },
     horizontalCategoriesBtn:{
        borderWidth: 0,
        height: PhoneHeight * 0.05,
        width: PhoneHeight * 0.1,
        justifyContent: "center"
      },
      subCategoriesName:{
          textAlign: "center"
      },
      allProducts:{
        borderWidth:0,
        margin: PhoneWidth * 0.02
      },
      productContainer:{
        width: PhoneWidth * 0.45,
        height: PhoneHeight * 0.21,
        borderWidth:0,
        borderColor:"#a2a2a2",
        borderTopLeftRadius: 24,
        borderTopRightRadius:24,
        backgroundColor: "#fff",
        borderBottomColor: "#a2a2a2",
        // marginLeft: PhoneHeight * 0.01,
        // marginTop: PhoneHeight * 0.02,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },

      productImages:{
        alignSelf: "center",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        width: responsiveSize(90),
        height: responsiveSize(90)
      },
      productInfo:{
        borderWidth:0,
        borderColor: "red",
        width: PhoneWidth*0.4,
        position: "absolute",
        alignSelf: "flex-start",
        marginTop: PhoneHeight * 0.15,
        marginLeft: PhoneWidth * 0.01
      },
      priceTextContainer:{
        height: PhoneHeight * 0.03,
        width: PhoneWidth * 0.1,
        borderWidth: 0,
        position: "absolute",
        alignSelf: "flex-end",
        marginTop: PhoneHeight * 0.17,

      },
      // priceTxt:{
      //   fontSize: responsiveSize(13),
      //   paddingRight:4,
      // },
      plusButtonContainer:{
        width: PhoneWidth * 0.45,
        height: PhoneHeight * 0.05,
        backgroundColor: "#fff",
        borderColor: "#a2a2a2",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        borderBottomWidth: 0,
        borderWidth:0,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

      },
      plusIcon:{
        width: responsiveSize(15),
        height: responsiveSize(15),
        alignSelf: "center",
      },
      favIconContainer:{
        width: responsiveSize(15),
        height: responsiveSize(15),
        borderWidth: 0,
        marginLeft: PhoneWidth * 0.02
        // marginTop: PhoneHeight * 0.05
      },
      favIcon:{
        justifyContent: "flex-start",
        width: responsiveSize(15),
        height: responsiveSize(15)
      }
})
export const mapStateToProps = state => {
  const { categoriesValue, subCategoriesValue, productsValue} = state.productsReducer;
  return {
    categoriesValue,
    subCategoriesValue,
    productsValue,
    // products
  }
}

export default connect(
  mapStateToProps,
  {
    fetchCategories,
    fetchSubCategories,
    fetchProducts,
    addToCart,
    addToFavs,
    removeToFavs
    
  }
)(main) ;
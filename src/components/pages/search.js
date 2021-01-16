import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,TextInput, Text, FlatList, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';
import { fetchCategories, fetchSubCategories, fetchProducts, addToCart, addToFavs, removeToFavs } from '../../actions/productsAction';

const data = [
    {
      title: "Banana", 
      uri: "https://elements-cover-images-0.imgix.net/06158768-2796-47ff-b51c-e00c09135d32?auto=compress%2Cformat&fit=max&w=866&s=c27749e1ea94992c819f6617e204b00b",
      price: "10",
      amount: "$",
      desc: "banana",
      piece: "12"
    },
    {
      title: "Apple", 
      uri: "https://elements-cover-images-0.imgix.net/44eb2556-6cd5-45ac-9a06-b3f4e5b645f1?auto=compress%2Cformat&fit=max&w=866&s=c3e3eafe23525b49c2c978623ce7a9dc",
      price: "10",
      amount: "$",
      desc: "apple",
      piece: "12"
    },
    // {
    //   title: "Carrot", 
    //   uri: "https://elements-cover-images-0.imgix.net/015c87ae-1678-49ce-8ad2-1955439bdde7?auto=compress%2Cformat&fit=max&w=866&s=4c7b4eed6aae49aeb8de2b8717e91f1a",
    //   price: "10",
    //   amount: "$",
    //   desc: "carrot",
    //   piece: "12"
    // }
]

class search extends Component {
  componentWillMount() {
    this.props.fetchSubCategories(this.props.cat_id)
    this.props.fetchProducts(this.props.product_id)
  }
    constructor(props) {
        super(props);
        this.state = {
            searchKey: ""
        }
    }

searchRenderItem = ({item}) => {
  return(
     <View style= {styles.allProducts}>
      <TouchableOpacity 
          onPress={() => this.props.fetchProducts(item.id)}
          style= {styles.productContainer}>
        <Image style= {styles.productImages} 
               source={{
                uri : item.uri
              }}/>
        <View style= {styles.productInfo} >
        <Text style= {{fontSize: responsiveSize(13)}}>{item.title}</Text>
        <Text style= {{fontSize: responsiveSize(10)}}>{item.desc}</Text>
        </View>
        <View style= {styles.priceTextContainer}>
        <TouchableOpacity 
  
     onPress= {() => 
   {  this.state.checked = this.state.checked + 1
       if(this.state.checked % 2 == 1 ) {
         this.props.addToFavs(item) 
         this.setState({
          isClicked: true
        })
    }
    else{
      this.state.checked = this.state.checked + 1
      this.props.removeToFavs(item)
      this.setState({
        isClicked: true
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
      const filteredData = data.filter((item)=>{
          return item.desc.indexOf(this.state.searchKey) >= 0
      })
    return(
        <View style= {styles.container}>
           <View style= {styles.searchContainer}>
               <View>
               <TextInput placeholder="press any key" style= {styles.searchTxt} onChangeText={(value)=> this.setState({searchKey: value})}></TextInput>
               </View>
               {
                   filteredData.map((item,index)=>{
                       return(
                         <ScrollView>
                        <View style= {styles.allProducts}>
                        <TouchableOpacity 
                            onPress={() => this.props.fetchProducts(item.id)}
                            style= {styles.productContainer}>
                          <Image style= {styles.productImages} 
                                 source={{
                                  uri : item.uri
                                }}/>
                          <View style= {styles.productInfo} >
                          <Text style= {{fontSize: responsiveSize(13)}}>{item.title}</Text>
                          <Text style= {{fontSize: responsiveSize(10)}}>{item.desc}</Text>
                          </View>
                          <View style= {styles.priceTextContainer}>
                          <TouchableOpacity 
                    
                       onPress= {() => 
                     {  this.state.checked = this.state.checked + 1
                         if(this.state.checked % 2 == 1 ) {
                           this.props.addToFavs(item) 
                           this.setState({
                            isClicked: true
                          })
                      }
                      else{
                        this.state.checked = this.state.checked + 1
                        this.props.removeToFavs(item)
                        this.setState({
                          isClicked: true
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
                    
                    </ScrollView>
                       )
                       
                   })
               }
               <TouchableOpacity style= {styles.searchBtn}>
                   <Image 
                      style= {styles.searchIcon}
                      source= {require("../../images/searchIcon.png")}/>
               </TouchableOpacity>

           </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4FFF1",
    },
    // searchContainer: {
    //     justifyContent: "center",
    //     borderWidth: 1,
    //     width: PhoneWidth,
    //     height: PhoneHeight * 0.1
    // },
    searchTxt: {
        borderWidth: 0,
        marginTop: PhoneHeight * 0.01,
        alignSelf: "center",
        borderRadius: 14,
        backgroundColor: "#fff",
        width: PhoneWidth * 0.75,
        height: PhoneHeight * 0.05
    },
    searchBtn: {
        borderWidth: 0,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: PhoneWidth * 0.1,
        height: PhoneHeight * 0.05,
        marginLeft: PhoneWidth * 0.77
        },
        searchIcon:{
          marginTop: PhoneHeight * 0.01,
          width: responsiveSize(25),
          height: responsiveSize(25),
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
          margin: PhoneWidth * 0.02,
          alignItems: "center",
          
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
)(search) ;
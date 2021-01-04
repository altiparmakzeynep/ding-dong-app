import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import { connect } from 'react-redux';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';
import { fetchCategories } from '../../actions/productsAction';
import { Actions } from 'react-native-router-flux';

// const categories = [
//     { id: "1", title: "Vegetables", uri: 'https://elements-cover-images-0.imgix.net/51373f4d-4476-4e5f-84b6-dc6da9f72aff?auto=compress%2Cformat&fit=max&w=866&s=c9893d248afedadeb826ec8bcbd2baec' },
//     { id: "2", title: "Fruits", uri: 'https://elements-cover-images-0.imgix.net/a45c4e3f-afdb-4306-8ae5-7cead4d27492?auto=compress%2Cformat&fit=max&w=866&s=8c1ef43b7431de72b52c436e33d6060d' },
//     { id: "3", title: "Beverages", uri: 'https://elements-cover-images-0.imgix.net/0a85cf97-4406-4717-bcd0-b2f9486400ce?auto=compress%2Cformat&fit=max&w=866&s=6a7b693fcb679a7d2a52c0cc643a4307' },
//     { id: "4", title: "Snacks", uri: 'https://elements-cover-images-0.imgix.net/b24ed75a-c880-4d4a-bb67-910dee412fc8?auto=compress%2Cformat&fit=max&w=866&s=03ca271935ff81395e899b0c1f58e612' },
//     { id: "5", title: "Cosmetics", uri: 'https://elements-cover-images-0.imgix.net/91a241e1-289c-4646-a7eb-7702e17fc20f?auto=compress%2Cformat&fit=max&w=866&s=d00b2406f2acb02ef142a4803c9a6c8c'},
//     { id: "6", title: "Homecare", uri: 'https://elements-cover-images-0.imgix.net/327fc7a7-171a-4d7a-b1ed-6a679f576f0e?auto=compress%2Cformat&fit=max&w=866&s=b1348237ea86cbbb4820e26976b9e94e'}
// ]

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
                    style={{ borderRadius:14, height: PhoneHeight * 0.13, width: PhoneWidth * 0.25,}}
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
        alignItems: "center",
        width: PhoneWidth,
        height: PhoneHeight * 0.45
    },
    bottomContainer:{
        borderWidth: 0,
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
        height: PhoneHeight * 0.05
    },
    topAddresText:{
      color: "#1b7e00",
      alignSelf: "center",
      fontSize: responsiveSize(18)
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
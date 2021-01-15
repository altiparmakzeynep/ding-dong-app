
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { PhoneHeight, PhoneWidth, responsiveSize } from '../config/env';

export default class campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Image 
        style = {styles.campaignPhoto}
        source={{
                    uri:"https://elements-twenty20-photos-0.imgix.net/production/uploads/items/8c384e3f-a79c-43a9-ac49-01c05ae06e4d/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=600&s=ddd6e0ba7d809913d0d777e1909b7ea6"}}
        />
        <Text style = {styles.campaignTxt}>Hello! This is a generator for text fonts of the "cool" variety. I noticed people were trying to find a generator like fancy letters, but were ending up on actual font sites rather than generators of copy-paste text like this one. So currently this is basically a duplicate of the above, but I think I'll try to collect a few more "cool" text fonts, like the old enlgish one, and specialise this a bit. If you're wondering how one produces cool text fonts like you see above, it's fairly simple (but maybe not what you'd expect). Basically, the text that gets generated isn't actually a font - it's a bunch of symbols that are in the unicode standard. You're reading symbols that are in the unicode standard right now - the</Text>
        <TouchableOpacity 
           onPress = {() => Actions.main()}
           style={styles.campaignBtn}>
          <Text style={styles.campaignBtnTxt}>SHOP NOW</Text></TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    campaignPhoto:{
        height:PhoneHeight*0.3,
        width:PhoneWidth*1
    },
    campaignTxt:{
        borderWidth:0,
        margin:'8%'
    },
    campaignBtn:{
       marginTop:'10%', 
       borderWidth: 0,
       width:PhoneWidth*0.33,
       height:PhoneHeight*0.048,
       borderRadius: 19,
       backgroundColor:'#00000029',
       alignItems:'center',
    },
    campaignBtnTxt:{
        marginTop:10,
        color: "white",
        fontWeight: "bold",
        fontSize: responsiveSize(13),
    }

})
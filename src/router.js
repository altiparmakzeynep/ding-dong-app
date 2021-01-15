import React, {Component} from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { responsiveSize, PhoneHeight } from './components/config/env';
import { Router, Stack, Scene, Drawer, Tabs } from 'react-native-router-flux';
import signIn from './components/authentication/signIn';
import signUp from './components/authentication/signUp';
import main from './components/pages/main';
import cart from './components/pages/cart';
import search from './components/pages/search';
import favourites from './components/pages/favourites';
import products from './components/pages/products';
import payment from './components/pages/payment';
import productsInfo from './components/pages/productsInfo';

class RouterComp extends Component {
    render() {
         return (
            <Router>
             <Stack  key="root" hideNavBar >
                <Stack key="auth" hideNavBar >
                    <Scene 
                        
                        hideNavBar
                        key="signIn"
                        component={signIn} />
                    <Scene
                        
                        hideNavBar
                        key="signUp"
                        component={signUp} />
                </Stack> 
                
                <Stack initial
                       navigationBarStyle={styles.navigationBar}
                       key= "main">

                         <Tabs
                            hideNavBar
                            showLabel={false}
                            tabBarStyle={styles.tabs}>
                             <Scene
                                key="main"
                                title="HOMEPAGE"
                                icon={({focused}) => (
                                <Image style={styles.tabIcon} source={focused ? require('./images/home.png'):require('./images/home.png')} />)}
                                component={main} />
                            <Scene
                                key="search"
                                title="SEARCH"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/loupe.png'):require('./images/loupe.png')} />)}
                                component={search} />
                            <Scene
                                key="appLogo"
                                tabBarOnPress={() => {}}
                                icon={({focused}) => (
                                    <View style={styles.appIconWrapper}>
                                        <View style={styles.semiCircle} />
                                            <Image style={styles.appIcon} source={require('./images/logo.png')} />
                                    </View>)}
                            component={main} />
                            <Scene 
                                key="cart"
                                title="CART"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/cart.png'):require('./images/cart.png')} />)}
                                component={cart} />
                            <Scene
                                key="favourites"
                                title="FAVOURITES"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/like.png'):require('./images/like.png')} />)}
                                component={favourites} />
                         </Tabs>
                       
                        <Scene 
                            hideNavBar
                            key="cart"
                            component={cart} />
                        <Scene 
                            key="search"
                            title= "SEARCH"
                            component={search} />
                        <Scene 
                            hideNavBar
                            key="favourites"
                            component={favourites} />  
                        <Scene  
                            key= "products"
                            title= "PRODUCTS"
                            component={products} /> 
                        <Scene  
                            
                            key= "payment"
                            title= "PAYMENT"
                            component={payment} /> 
                        <Scene  
                            
                            key= "productsInfo"
                            title= "PRODUCT"
                            component={productsInfo} /> 
                       
                            
                </Stack>
             </Stack>
        </Router>
           )
       }
   }
   const styles = StyleSheet.create({
    navigationBar: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    tabs: {
        borderTopWidth: 1,
        borderTopColor: '#dfdfdf',
        zIndex: 1,
    },
    tabIcon: {
        width: responsiveSize(27),
        height: responsiveSize(27),
    },
    appIconWrapper: {
        backgroundColor: '#fff',
        marginBottom: "35%",
        borderRadius: 10,
        alignSelf: 'center',
    },
    semiCircle: {
        width: responsiveSize(20),
        backgroundColor: '#fff',
        height: responsiveSize(40),
        borderColor: '#dfdfdf',
        position : 'absolute',
        justifyContent: 'center',
        bottom: PhoneHeight <= 568 ? responsiveSize(25):responsiveSize(14.5),
        borderRightColor: "#fff",
        alignSelf: 'center',
        borderTopLeftRadius: 150,
        borderBottomLeftRadius: 150,
        borderWidth: 0,
        transform: [{ rotate: "90deg"}],
    },
    appIcon: {
        width: responsiveSize(25),
        height: responsiveSize(35),
        backgroundColor: '#fff',
        marginTop: 10,
        zIndex: 99,
    }
})
export default RouterComp;
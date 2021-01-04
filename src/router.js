import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { responsiveSize } from './components/config/env';
import { Router, Stack, Scene, Drawer, Tabs } from 'react-native-router-flux';
import signIn from './components/authentication/signIn';
import signUp from './components/authentication/signUp';
import main from './components/pages/main';
import cart from './components/pages/cart';
import search from './components/pages/search';
import others from './components/pages/others';
import products from './components/pages/products';

class RouterComp extends Component {
    render() {
         return (
            <Router>
             <Stack key="root" hideNavBar >
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
                                key="cart"
                                title="CART"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/groceries.png'):require('./images/groceries.png')} />)}
                                component={cart} />
                            <Scene
                                key="others"
                                title="OTHERS"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/menu.png'):require('./images/menu.png')} />)}
                                component={others} />
                         </Tabs>
                       
                        <Scene 
                            hideNavBar
                            key="cart"
                            component={cart} />
                        <Scene 
                            hideNavBar
                            key="search"
                            component={search} />
                        <Scene 
                            hideNavBar
                            key="others"
                            component={others} />  
                        <Scene 
                            
                            key= "products"
                            title= "PRODUCTS"
                            component={products} />  
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
    }


})
export default RouterComp;
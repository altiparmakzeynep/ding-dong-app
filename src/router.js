import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native';
import { responsiveSize } from './config/env';
import { Router, Stack, Scene, Drawer, Tabs } from 'react-native-router-flux';
import signIn from './components/authentication/signIn';
import signUp from './components/authentication/signUp';
import main from './components/main';

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
                <Stack  initial
                       navigationBarStyle={styles.navigationBar}
                       key= "main">
                         <Tabs
                            hideNavBar
                            showLabel={false}
                            tabBarStyle={styles.tabs}>
                             <Scene
                                key="main"
                                title="ANASAYFA"
                                icon={({focused}) => (
                                <Image style={styles.tabIcon} source={focused ? require('./images/home.png'):require('./images/home.png')} />)}
                                component={main} />
                            <Scene
                                key="search"
                                title="ARAMA"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/loupe.png'):require('./images/loupe.png')} />)}
                                component={main} />
                            <Scene
                                key="cart"
                                title="Sepetim"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/groceries.png'):require('./images/groceries.png')} />)}
                                component={main} />
                            <Scene
                                key="campaign"
                                title="KAMPANYALAR"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/discount.png'):require('./images/discount.png')} />)}
                                component={main} />
                            <Scene
                                key="others"
                                title="DİĞER"
                                icon={({focused}) => (
                                    <Image style={styles.tabIcon} source={focused ? require('./images/menu.png'):require('./images/menu.png')} />)}
                                component={main} />
                        </Tabs>
                        
                </Stack>
               
                {/* <Stack key= "main"  >
                <Tabs       
                    tapToClose={true}
                    hideNavBar
                    tabs
                    contentComponent={bottomBar}>
                    <Scene title= "Homepage"
                            key="Main"
                            component={Main}/>
                    <Scene title= "Homepage"
                            key="Main"
                            tabBarStyle={{backgroundColor: "red"}} 
                            component={Main}/>
                    <Scene title= "Homepage"
                            key="Main"
                            tabBarStyle={{backgroundColor: "red"}} 
                            component={Main}/>
                    <Scene title= "Homepage"
                            key="Main"
                            tabBarStyle={{backgroundColor: "red"}} 
                            component={Main}/>
                    </Tabs> 
                    <Scene 
                        hideNavBar
                        key="Min"
                        component={Main}
                        title="Homepage">
                    </Scene>
                </Stack> */}

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
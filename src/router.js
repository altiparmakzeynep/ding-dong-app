import React, {Component} from 'react';
// import { StyleSheet } from 'react-native';
import { Router, Stack, Scene, Drawer, Tabs } from 'react-native-router-flux';
import signIn from './components/authentication/signIn';
import signUp from './components/authentication/signUp';

class RouterComp extends Component {
    render() {
         return (
            <Router>
            <Stack key="root" hideNavBar >
                <Stack key="auth" hideNavBar >
                    <Scene 
                        initial
                        hideNavBar
                        key="signIn"
                        component={signIn} />
                    <Scene
                       
                        hideNavBar
                        key="signUp"
                        component={signUp} />
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

export default RouterComp;
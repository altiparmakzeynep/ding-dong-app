import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import signIn from './components/authentication/signIn';
import SignUp from './components/authentication/signUp';
import Main from './components/pages/main';

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
                        component={SignUp} />
                </Stack>
                {/* <Stack initial={isMainLogin} key= "main">
                    <Drawer
                        tapToClose={true}
                        hideNavBar
                        drawerIcon= {DrawerIcon}
                        contentComponent={SideBar}>
                        <Scene title= "Homepage"
                                key="Main"
                                component={Main}/>
                    </Drawer>
                    <Scene
                        key="CreateTask"
                        component={CreateTask}
                        title="Yeni İş Kitle">
                    </Scene>
                    <Scene
                        key="Users"
                        component={Users}
                        title= "Kitlenecekler" />
                </Stack> */}
                <Stack  key= "main">
                    <Scene
                        
                        key="Main"
                        title= "Homepage"
                        component={Main}
                        />
                </Stack>
             </Stack>
        </Router>
           )
       }
   }

export default RouterComp;
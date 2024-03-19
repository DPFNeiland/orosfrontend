import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Login from '../screens/telalogin/login'
import Cadastro from '../screens/telaCadastro/Cadastro'

const Tab = createBottomTabNavigator()

export default function(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Login"
                component={Login}
            />
            <Tab.Screen
                name="Cadastro"
                component={Cadastro}
            />
        </Tab.Navigator>
    )
}
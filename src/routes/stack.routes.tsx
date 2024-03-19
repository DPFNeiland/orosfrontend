import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";

import TabRoutes from "./tab.routes";
import Login from "../screens/telalogin/login";

const Stack = createBottomTabNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{title:''}}>
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}
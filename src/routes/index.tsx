import {NavigationContainer} from '@react-navigation/native'

import TabRoutes from './tab.routes'

export default function(){
    return(
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}

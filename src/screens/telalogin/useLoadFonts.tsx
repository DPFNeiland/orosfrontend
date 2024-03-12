import { useEffect, useState } from "react";
import * as Font from 'expo-font'

const useLoadFonts = () => {
    const [fontsLoaded, setfontsLoaded] = useState(false)

    const loadFonts = async () => {
        await Font.loadAsync({
            'MBFSpace': require('../../../assets/fonts/MBFSpace.ttf')
        })
        setfontsLoaded(true)
    }
    useEffect(() => {
        loadFonts()
    }, [])

    return fontsLoaded
}

export default useLoadFonts
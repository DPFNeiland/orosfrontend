import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
      'MBFSpace': require('../../../assets/fonts/MBFSpace.ttf'),
    });
    
    if (!fontsLoaded) {
      return false;
    }
    
    return true;
}

export default useLoadFonts;

import { useFonts } from "expo-font";

const [loadFont, errorFont] = useFonts({
    'Yu-Gothic-Light': require('../../assets/fonts/yugothil.ttf'),
    // 'Yu-Gothic-UIBold': require('../../assets/fonts/YuGothB.ttc'),
    'Yu-Gothic-Regular': require('../../assets/fonts/yu-gothic-regular.ttf'),
    'Yu-Gothic-Bold': require('../../assets/fonts/yugothib.ttf'),
  });

export { loadFont, errorFont }
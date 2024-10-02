import { StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth } from "../../define/deviceScreen";

export const IntroduceStyle = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'white', 
        // paddingTop: 50,
        alignItems: 'center'
    },
    gradientContainer: {
        flexDirection: 'column',
        width: '100%',
        height: '100%', 
        paddingTop: 20,
        alignItems: 'center'
      },
    circleViewStyle: {
        width: (437/ 375) * deviceWidth, 
        height: (437 / 375) * deviceWidth,
        borderRadius: ((437 / 375) * deviceWidth) / 2,
        backgroundColor: '#979797',
        opacity: 0.2,
        // marginTop: -(49 / ((437 / 375) * deviceWidth)),
        // marginLeft: -(101 / ((437 / 375) * deviceWidth)),
        marginTop: -99,
        marginLeft: -141
    }
})
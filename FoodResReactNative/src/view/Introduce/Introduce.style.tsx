import { StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth } from "../../define/deviceScreen";

export const IntroduceStyle = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        width: deviceWidth,
        height: deviceHeight, 
        backgroundColor: 'white', 
        // paddingTop: 50,
        alignItems: 'center'
    },
    gradientContainer: {
        flexDirection: 'column',
        width: deviceWidth,
        height: deviceHeight, 
        paddingTop: 20,
        alignItems: 'center'
      },
    circleViewStyle: {
        width: (437/ 375) * deviceWidth, 
        height: (437 / 375) * deviceWidth,
        borderRadius: ((437 / 375) * deviceWidth) / 2,
        backgroundColor: '#979797',
        opacity: 0.2,
        marginTop: -(49 / 812) * deviceHeight,
        marginLeft: -(101 / 375) * deviceWidth,
    },
    imageTutorialStyle: {
        marginTop: -200,
        width: 299, 
        height: 299, 
        resizeMode: 'contain'
    },
    titleTextTutorialStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'lucida grande',
        paddingTop: 20
      },
      contentTextTutorialStyle: {
        fontSize: 16,
        fontStyle: 'italic',
        fontFamily: 'lucida grande',
        width: 327, 
        height: 72,
        textAlign: 'center',
        paddingTop: 20
      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEA734',
        padding: 10,
        width: 335,
        height: 48,
        marginTop: 20,
        borderRadius: 12,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Cochin',
        color: 'white'
    }
})
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, LogBox } from 'react-native';
import TopToturial from '../TopTutorial/TopTutorial';
import { TutorialStyle } from './Tutorial.Style';
import LinearGradient from 'react-native-linear-gradient';
import TutorialModel from './TutorialModel';
import { deviceWidth, deviceHeight } from '../../define/deviceScreen';
// import { loadFont, errorFont } from '../../define/font';
import * as SplashScreen from 'expo-splash-screen';


const Tutorial = ({navigation}: any) => {

    const numberOfPage: number = 3;

    const tutorialModel =
        [new TutorialModel(require('../../img/Tutorial/favorite_tutorial.png'), 'All your favorites', 'Order from the best local restaurants win easy, on-demand delivery'),
        new TutorialModel(require('../../img/Tutorial/delivery_tutorial.png'), 'Free delivery offers', 'Free delivery for new customers via Apple Pay and others payment methods'),
        new TutorialModel(require('../../img/Tutorial/choiceFood_tutorial.png'), 'Choose your food', "Easily find your type of food craving and you'll get delivery in wide range"),
        ];

    const [info, nextInfo] = useState(tutorialModel[0])
    const [currentPage, newPage] = useState(1)

    // useEffect(() => {
    //     if (loadFont || errorFont) {
    //       SplashScreen.hideAsync();
    //     }
    //   }, [loadFont, errorFont]);
    
    //   if (!loadFont && !errorFont) {
    //     return null;
    //   }

    const getInfoTutorialModel = (page: any) => {
        nextInfo(tutorialModel[page])
        // return tutorialModel[page]
    }

    const Circle = () => {
        const circleViews = [];
        for (let i = 0; i < numberOfPage; i++) {
            circleViews.push(
                <View style={{ width: 8, height: 5, borderRadius: 5, backgroundColor: i == currentPage - 1 ? 'rgba(34, 164, 93, 1)' : 'rgba(134, 134, 134, 1)', margin: 5 }} />
            )
        }
        return circleViews
    }

    const handleTapButton = () => {
        console.log("Before " + currentPage)
        newPage(currentPage + 1)
        if (currentPage < numberOfPage) {
            console.log("After " + currentPage)
            getInfoTutorialModel(currentPage)
        } else {
            // navigation.navigate('Login');
            console.log("======>>>>>>" + currentPage)
        }
    }

    useEffect(() => {
        LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop.']);
      }, []);

    return (
        <View style={TutorialStyle.container}>
            <LinearGradient
                colors={['#ffffff', '#7caed8']} // Mảng màu gradient, bạn có thể thay đổi các giá trị màu theo ý muốn
                start={{ x: 0, y: 0 }} // Điểm bắt đầu của gradient (0, 0) là góc trên bên trái
                end={{ x: 1, y: 0 }} // Điểm kết thúc của gradient (1, 0) là góc trên bên phải
                locations={[0, 1]}
                style={TutorialStyle.gradientContainer}
            >
                <TopToturial isIntroduce={false} />
                <Image source={info.imageTutorial} style={{width: (299 / 375) * deviceWidth, height: (299 / 812) * deviceHeight ,...TutorialStyle.imageTutorialStyle}} />
                <Text style={{...TutorialStyle.titleTextTutorialStyle,}}>{info.titleTextTutorial}</Text>
                <Text style={{...TutorialStyle.contentTextTutorialStyle}}>{info.contentTextTutorial}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {Circle()}
                </View>
                <TouchableOpacity style={{width: (335 / 375) * deviceWidth, height: (48 / 812) * deviceHeight, ...TutorialStyle.button}}
                    onPress={handleTapButton}
                >
                    <Text style={TutorialStyle.text}>GET STARTED</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default Tutorial;


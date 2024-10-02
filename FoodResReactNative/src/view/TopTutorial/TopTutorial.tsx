import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { TopTutorialStyle } from './TopTutorial.Style';

const TopToturial = (isIntroduce: any) => {

    return (
        <View style={isIntroduce ? TopTutorialStyle.containerWithIntroduce : TopTutorialStyle.container}>
            <View style={TopTutorialStyle.viewOfImageTop}>
                <Image source={require('../../img/Tutorial/icon_topTutorial.png')} style={TopTutorialStyle.imageTop} />
            </View>
            <Text numberOfLines={2} style={TopTutorialStyle.textTop}>FastLang{'\n'}FoodService</Text>
        </View>
    )
}

export default TopToturial;
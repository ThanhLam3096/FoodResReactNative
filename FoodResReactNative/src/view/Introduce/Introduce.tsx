import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { IntroduceStyle } from "./Introduce.style";
import LinearGradient from 'react-native-linear-gradient';
import TopToturial from "../TopTutorial/TopTutorial";
import { deviceWidth } from "../../define/deviceScreen";

const Introduce = ({navigation}: any) => { 

    const handleTapButton = () => {
        navigation.navigate('Tutorial');
    }

    return(
        <ScrollView>
            <View style={IntroduceStyle.container}>
                <LinearGradient
                colors={['#ffffff', '#7caed8']} // Mảng màu gradient, bạn có thể thay đổi các giá trị màu theo ý muốn
                start={{ x: 0, y: 0 }} // Điểm bắt đầu của gradient (0, 0) là góc trên bên trái
                end={{ x: 1, y: 0 }} // Điểm kết thúc của gradient (1, 0) là góc trên bên phải
                locations={[0, 1]}
                style={IntroduceStyle.gradientContainer}
            >
                <View style={IntroduceStyle.circleViewStyle}>
                    <TopToturial isIntroduce={true} />
                </View>
                <Image source={require('../../img/Tutorial/introduceWelcome_img.png')} style={IntroduceStyle.imageTutorialStyle} />
                <Text style={IntroduceStyle.titleTextTutorialStyle}>Welcome</Text>
                <Text style={IntroduceStyle.contentTextTutorialStyle}>It’s a pleasure to meet you. We are excited that you’re here so let’s get started!</Text>
                <TouchableOpacity style={IntroduceStyle.button}
                    onPress={handleTapButton}
                >
                    <Text style={IntroduceStyle.text}>GET STARTED</Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
        </ScrollView>
    )
}

export default Introduce;
import { Text, View } from "react-native";
import { IntroduceStyle } from "./Introduce.style";
import LinearGradient from 'react-native-linear-gradient';
import TopToturial from "../TopTutorial/TopTutorial";
import { deviceWidth } from "../../define/deviceScreen";

const Introduce = ({navigation}: any) => { 
    return(
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
            </LinearGradient>
        </View>
    )
}

export default Introduce;
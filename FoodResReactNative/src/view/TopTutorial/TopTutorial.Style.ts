import { StyleSheet } from 'react-native';

export const TopTutorialStyle = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row', 
    width: '100%', 
    height: 80,
    justifyContent: 'center',
  },
  containerWithIntroduce: {
    marginTop: 160,
    marginLeft: 100,
    flexDirection: 'row', 
    width: '100%', 
    height: 80,
    justifyContent: 'center',
  },
  viewOfImageTop: {
    height: 80, alignItems: 'center', justifyContent: 'center', marginLeft: 30
  },
  imageTop: {
    width: 65, height: 65, resizeMode: 'contain'
  },
  textTop: {
    flex: 3,
    fontSize: 33,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: -70
  }
});
import { StyleSheet } from 'react-native';

export const TutorialStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center',
  },
  secondContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
  },
  imageTutorialStyle: {
    resizeMode: 'contain',
  },
  gradientContainer: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  titleTextTutorialStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 20,
    color: "#010F07"
  },
  contentTextTutorialStyle: {
    fontSize: 16,
    fontStyle: 'italic',
    width: 327,
    height: 72,
    textAlign: 'center',
    paddingTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEA734',
    padding: 10,
    marginTop: 20,
    borderRadius: 12,
},
text: {
    fontSize: 14,
    fontFamily: 'Cochin',
    color: 'white',
},
});

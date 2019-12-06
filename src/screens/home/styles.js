import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../utils/index';
import colors from '../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE
  },
  main: {
    flex: 1,
    marginBottom: 10,
  },
  top: {
    marginTop: 0
  },
  option: {
    width: 25, height: 25, alignSelf: 'center', marginTop: 15
  },
  subContainer: {
    marginTop: 10, width: Metrics.screenWidth
  },
  text: {
    textAlign: 'left', color: Colors.Gray, marginLeft: 30, fontSize: 14
  },
  text2: {
    textAlign: 'left', color: Colors.Gray, marginLeft: 30, fontSize: 14, marginTop: 20
  },
  text3: {
    backgroundColor: Colors.WHITE, borderRadius: 10, width: 20, height: 20, marginLeft: 0, textAlign: 'center'
  },
  rowView1: {
    margin: 2, width: 250, height: 140, backgroundColor: Colors.APPBACKGROUND, justifyContent: 'center', borderRadius: 5,
  },
  rowView2: {
    margin: 2, flexDirection: 'row', backgroundColor: Colors.APPBACKGROUND, borderRadius: 5, height: 60, alignSelf: 'center', width: Metrics.screenWidth * 0.95,
  },
  img: {
    width: 40, height: 40, alignSelf: 'center', left: 10
  },
  content: {
    color: colors.Black, fontSize: 13, textAlign: 'center'
  },
  content2: {
    color: colors.Black, fontSize: 14, textAlign: 'left', alignSelf: 'center', left: 20, width: Metrics.screenWidth * 0.70
  },
  progress: {
    width: 200, marginTop: 20, alignSelf: 'center', borderRadius: 8
  },
  bottom: {
    flexDirection: 'row', justifyContent: 'space-evenly', width: Metrics.screenWidth
  },
  lowerCard: {
    height: 60, width: Metrics.screenWidth * 0.45, flexDirection: 'row', backgroundColor: Colors.APPBACKGROUND, justifyContent: 'space-between', marginVertical: 5
  },
  margin : {
    margin: 5 
  },
  verticalProgress: {
    width: 40, alignSelf: 'center', borderRadius: 5, transform: [{ rotate: '90deg' }]
  },
  innerText: {
    textAlign: 'left', color: Colors.BLACK, left: 10, alignSelf: 'center', width: 80
  },
  icon: {
    width: 40, height: 40, alignSelf: 'center'
  },
  row: {
    flexDirection: 'row'
  },
});
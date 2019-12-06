import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../utils/index';
import colors from '../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE
  },
  subContainer: {
    width: Metrics.screenWidth
  },
  row: {
    flexDirection: 'row'
  },
  topView: {
    marginTop: 0
  },
  option: {
    width: 25, 
    height: 25, 
    alignSelf: 'center', 
    marginTop: 15
  },
  listTitle: {
    textAlign: 'left',
    color: Colors.Gray,
    marginLeft: 30,
    fontSize: 14,
    marginTop: 20
  },
  listNum: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    width: 20,
    height: 20,
    marginLeft: 0,
    textAlign: 'center'
  },
  rowView: {
    margin: 2,
    flexDirection: 'row',
    backgroundColor: Colors.APPBACKGROUND,
    borderRadius: 5,
    height: 60,
    alignSelf: 'center',
    width: Metrics.screenWidth * 0.95,
  },
  userIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    left: 10
  },
  rowText: {
    color: colors.Black,
    fontSize: 14,
    textAlign: 'left',
    width: Metrics.screenWidth * 0.70,
    alignSelf: 'center', left: 20
  }
});
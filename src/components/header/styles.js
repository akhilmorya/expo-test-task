import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/index';

export default StyleSheet.create({
    container: {
        marginVertical: 5, 
        borderBottomWidth: 0.5, 
        elevation: 2.5, 
        borderBottomColor: Colors.WHITE, 
        backgroundColor: Colors.WHITE
    },
    row: {
        flexDirection: 'row', 
        marginVertical: 5, 
        marginBottom: 30
    },
    backView: {
        alignSelf: 'center' 
    },
    backIcon: {
        width: 25, 
        height: 25, 
        alignSelf: 'center', 
        marginLeft: 10
    },
    userIcon: {
        width: 25, 
        height: 25, 
        alignSelf: 'center', 
        marginLeft: 10
    },
    headerIcon: {
        width: 30, 
        height: 30, 
        alignSelf: 'flex-end', 
        marginRight: 15, 
        marginTop: 25
    },
    subContent: {
        flexDirection: 'row', 
        alignSelf: 'center', 
        marginLeft: 10
    },
    title: {
        textAlign: 'center', 
        color: Colors.BLACK, 
        left: 10, 
        alignSelf: 'center'
    },
});
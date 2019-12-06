import React from 'react';
import {
  Image, View, Text, TouchableOpacity
} from 'react-native';
import { Images } from '../../utils/index';
import styles from './styles';

function Header({
  visible,
  goBack,
  title
}) {
  return (
    <View>
      {visible ?
        <View style={styles.container}>
          <Image source={Images.HEADER} style={styles.headerIcon} />
          <View style={styles.row}>
            <TouchableOpacity activeOpacity={0.8} onPress={goBack} style={styles.backView}>
              <Image source={Images.BACK} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.subContent}>
              <Image source={Images.USER} style={styles.userIcon} />
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        </View>
        :
        <View>
          <Image source={Images.HEADER} style={styles.headerIcon} />
          {visible ?
            <View style={styles.row}>
              <TouchableOpacity activeOpacity={0.8} onPress={goBack} style={styles.backView}>
                <Image source={Images.BACK} style={styles.backIcon} />
              </TouchableOpacity>
              <View style={styles.subContent}>
                <Image source={Images.USER} style={styles.userIcon} />
                <Text style={styles.title}>Nestle</Text>
              </View>
            </View> : null}
        </View>
      }
    </View>
  )
}

export default Header;

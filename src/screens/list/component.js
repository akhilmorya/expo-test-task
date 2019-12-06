
import React from 'react';
import { Text, View, SafeAreaView, Image, FlatList } from 'react-native';
import { Images, Literals } from '../../utils/index';
import { Header } from '../../components/index';
import styles from './styles';
import Swipeout from 'react-native-swipeout';

export default class ListComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.getList();
    this.state = {
      list: [],
      listString: '',
      title: this.props.navigation.state.params.title
    }
  }

  // Reterive the data of list from state
  static getDerivedStateFromProps(nextProps) {
    return {
      list: nextProps.list,
      listString: JSON.stringify(nextProps.list)
    };
  }

  // Removing the selected item from list
  deleteNote(i) {
    const index = this.state.list.findIndex((p) => p.id === i.id);
    if (index !== -1) {
      this.state.list.splice(index, 1);
      this.props.removeItem(this.state.list);
      this.setState({ listString: JSON.stringify(this.state.list) })
    }
  }

  // Displaying the left button on swipe and removing the selected item from list
  left = (i) => {
    var swipeLeft = [
      {
        backgroundColor: 'transparent',
        component: (
          <Image source={Images.DELETE} style={styles.option} />
        ),
        onPress: () => this.deleteNote(i)
      }
    ]
    return swipeLeft;
  }

  // Displaying the right button on swipe
  right = () => {
    let swipeRight = [{
      backgroundColor: 'transparent',
      component: (
        <Image source={Images.SETTINGS} style={styles.option} />
      )
    }];
    return swipeRight;
  }

  render() {
    const { list, listString, title } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <Header visible={true} title={title} goBack={() => this.props.navigation.goBack()} />
        </View>
        <View style={styles.subContainer}>
          <View style={styles.row}>
            <Text style={styles.listTitle}>{Literals.LISTS}</Text>
            <Text style={[styles.listTitle, styles.listNum]}>{list.length} </Text>
          </View>
          {
            list.length > 0
              ? (
                <FlatList
                  extraData={listString}
                  data={list}
                  renderItem={({ item, index }) => {
                    return (
                      <Swipeout
                        right={this.right()}
                        left={this.left(item)}
                        autoClose={true}
                        rowID={index}
                        close={this.state.activeRow !== index}
                        backgroundColor='rgba(0, 0, 0, 1, 0.8)'
                        onOpen={( rowId, direction ) => {
                          if (typeof direction !== "undefined" && this.state) {
                            this.setState({ activeRow: rowId });
                            if (this.state.previousTimeOut != null)
                              clearTimeout(this.state.previousTimeOut);
                            if (direction === "left") {
                              this.deleteNote(item)
                            }
                            this.state.previousTimeOut = setTimeout(
                              (() => {
                                if (
                                  this.state &&
                                  this.state.activeRow != null &&
                                  this.state.activeRow == rowId
                                ) {
                                  this.setState({ activeRow: null });
                                }
                              }).bind(this),
                              500
                            );
                          }
                        }}
                      >
                        <View style={styles.rowView}>
                          <Image source={Images.USER} style={styles.userIcon} />
                          <Text style={styles.rowText}>{item.text}</Text>
                        </View>
                      </Swipeout>
                    )
                  }
                  }
                  keyExtractor={(index) => index.toString()}
                />
              )
              : null
          }
        </View>
      </SafeAreaView>
    );
  }
}

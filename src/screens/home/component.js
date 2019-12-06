
import React from 'react';
import { Text, View, SafeAreaView, ProgressBarAndroid, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Images, Literals } from '../../utils/index';
import styles from './styles';
import { Header } from '../../components/index';
import Swipeout from 'react-native-swipeout';

export default class HomeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      list: [],
      deals: [],
      listString: '',
    }
  }

  // Reterive the data of list from state
  static getDerivedStateFromProps(nextProps) {
    return {
      cards: nextProps.cards,
      list: nextProps.list,
      deals: nextProps.deals,
      listString: JSON.stringify(nextProps.list)
    };
  }

  // Removing the selected item from list
  deleteNote(i) {
    const index = this.state.list.findIndex((p) => p.id === i.id);
    if (index > -1) {
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
    const { cards, list, deals, listString } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header visible={false} />
        <ScrollView style={styles.main}>
          <View style={styles.subContainer}>
            <Text style={styles.text}>{Literals.CARDS}</Text>
            {
              cards.length > 0
                ? (
                  <FlatList
                    horizontal
                    data={cards}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <View style={styles.rowView1}>
                        <Text style={styles.content}>{item.text}</Text>
                        <View style={styles.progress}>
                          <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={0.7}
                          />
                        </View>
                      </View>
                    )}
                    keyExtractor={(index) => index.toString()}
                  />
                )
                : null
            }
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
                          onOpen={(secId, rowId, direction) => {
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
                          <View style={styles.rowView2}>
                            <Image source={Images.USER} style={styles.img} />
                            <Text style={styles.content2}>{item.text}</Text>
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
            <View style={styles.row}>
              <Text style={styles.listTitle}>{Literals.DEALS} </Text>
              <Text style={[styles.listTitle, styles.listNum]}>{deals.length} </Text>
            </View>
            <FlatList
              style={{ padding: 8 }}
              numColumns={2}
              data={deals}
              renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={0.8} style={[styles.lowerCard, styles.margin]}
                  onPress={() => this.props.navigation.navigate('ListScreen', { title: item.text })}>
                  <View style={styles.row}>
                    <Image source={Images.USER} style={styles.icon} />
                    <Text style={styles.innerText}>{item.text}</Text>
                  </View>
                  <View style={styles.verticalProgress}>
                    <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={0.5}
                    />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(index) => index.toString()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
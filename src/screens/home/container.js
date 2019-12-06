import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from './component';
import * as cardActions from '../../actions/cards';
import * as listActions from '../../actions/list';
import * as dealActions from '../../actions/deals';

class HomeContainer extends React.PureComponent {

  // Loading mock cards and deals data into redux state
  componentDidMount(){
    this.props.getCards();
    this.props.getList();
    this.props.getDeals();
  }

  render() {
    return (
      <HomeComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.cardReducer.cards,
  list: state.listReducer.list,
  deals: state.dealsReducer.deals
});

const mapDispatchToProps = (dispatch) => ({
  getCards: () => {
    return dispatch(cardActions.cards());
  },
  getList: () => {
    return dispatch(listActions.list());
  },
  removeItem: (data) => {
    return dispatch(listActions.deleteItemList(data));
  },
  getDeals: () => {
    return dispatch(dealActions.deals());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

import React from 'react';
import { connect } from 'react-redux';
import ListComponent from './component';
import * as listActions from '../../actions/list';

class ListContainer extends React.PureComponent {
  render() {
    return (
      <ListComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer.list
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => {
    return dispatch(listActions.list());
  },
  removeItem: (data) => {
    return dispatch(listActions.deleteItemList(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

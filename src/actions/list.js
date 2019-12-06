// List action to dispatch the list data

import { LIST, REMOVE_ITEM } from '../utils/constants/index';

export function list() {
  return {
    type: LIST,
  };
}

export function deleteItemList(data) {
  return {
    type: REMOVE_ITEM,
    data
  };
}
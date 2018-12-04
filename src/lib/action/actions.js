
import { NAV_LIST_item_ADD , NAV_LIST_item_ADD_ASYNC } from './actionTypes';


export  function addNavListItem( item ){
  return {
    type:NAV_LIST_item_ADD,
    payload:{
      item
    }
  }
}

/** 
 * 异步添加navlist
 */
export  function addNavListItemAsync( item ){
  return {
    type: NAV_LIST_item_ADD_ASYNC,
    payload:{
      item
    }
  }
}
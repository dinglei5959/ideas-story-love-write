
import { NAV_LIST_item_ADD } from './actionTypes';


export  function addNavListItem( item ){
  return {
    type:NAV_LIST_item_ADD,
    payload:{
      item
    }
  }
}
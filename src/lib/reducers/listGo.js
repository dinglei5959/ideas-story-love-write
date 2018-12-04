
import {  Archive, Author, Home, Subscribe, Tag } from '@assets/menus';
import { NAV_LIST_item_ADD } from '@lib/action/actionTypes';

const navList = [
  {name:'Home', icon:Home},
  {name:'Tags', icon:Tag},
  {name:'Archive', icon:Archive},
  {name:'Author', icon:Author},
  {name:'Subscribe', icon:Subscribe}
]

const initialState = {
  navList
}

export default function listGoReducer( state = initialState , action ){
  switch (action.type){
    case NAV_LIST_item_ADD:  // 添加 navlist item的动作
      const { navList } = state;
      return {
        ...state,
        navList:[...navList,action.payload.item]
      };
      // 默认什么都不做
    default:
      return state;
  }
}

import { ARTICLE_ADD } from '@lib/action/actionTypes';
import list from '@md/list.json';

const articleList = list.fileNamesList.map((filename)=>{
  let fileContent = require('@md/' + filename);
  return fileContent;
});

const initialState = {
  articleList
};

export default function listGoReducer( state = initialState , action ){
  switch (action.type){
    case ARTICLE_ADD:  // 添加 navlist item的动作
      const { articleList } = state;
      return {
        ...state,
        articleList:[...articleList,action.payload.item]
      };
      // 默认什么都不做
    default:
      return state;
  }
}
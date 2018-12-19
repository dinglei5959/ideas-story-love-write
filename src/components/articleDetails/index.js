import React from 'react';
import style from './index.module.scss';

export default class ArticleItem extends React.Component {

  render(){
    return (
      <article className={style.article_container} dangerouslySetInnerHTML={{__html:this.props.html }}></article>
    )
  }
}
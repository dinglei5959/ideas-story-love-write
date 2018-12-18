import React from 'react';
import { connect } from 'react-redux';
import Banner from '@components/banner';
import ArticleItem from '@components/articleItem';

import style from './index.module.scss';

class Home extends React.Component{
  constructor(props){
    super();
  }

  render(){
    console.log(this.props.articleList);
    return (<article>
      <Banner></Banner>
      
      <article className={style.article_container}>
        {/* 文章列表 */}
        {this.props.articleList.map(article=>{
          const { attributes , body , html } =  article;
          const { author , date , tags , title } = attributes;
          return <ArticleItem author={author} date={date} tags={tags} title={title} />
        })}
      </article>
     
    </article>)
  }
}

const mapStateToProps = state =>({
  articleList:state.articleList.articleList,
})

export default connect(mapStateToProps)(Home);
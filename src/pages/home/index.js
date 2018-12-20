import React from 'react';
import { connect } from 'react-redux';
import Banner from '@components/banner';
import ArticleItem from '@components/articleItem';

import style from './index.module.scss';

class Home extends React.Component{
  constructor(props){
    super();
    this.goArticle.bind(this);
  }

  goArticle(index){
    this.props.history.push({
      pathname:'/article/' + index
    });
  }

  render(){
    console.log(this.props.articleList);
    return (<article>
      <Banner></Banner>
      
      <article className={style.article_container}>
        {/* 文章列表 */}
        {this.props.articleList.map( (article ,index)=>{
          const { attributes } =  article;
          const { author , date , tags , title , abstract } = attributes;
          return <ArticleItem key={date} content={abstract}
          
          author={author} date={date} tags={tags} title={title} goArticle={()=>{ this.goArticle(index) }} />
        })}
      </article>
     
    </article>)
  }
}

const mapStateToProps = state =>({
  articleList:state.articleList.articleList,
})

export default connect(mapStateToProps)(Home);
import React from 'react';
import { connect } from 'react-redux';

import Banner from '@components/banner';
import ArticleDetails from '@components/articleDetails';

import style from './index.module.scss';

class Article extends React.Component {
  render(){
    const index = this.props.match.params.index;
    const article = this.props.articleList[index];
    return (<article>
      <Banner type="losanji"></Banner>
      
      <article className={style.article_container}>
        <ArticleDetails html={article.html}></ArticleDetails>
      </article>
     
    </article>)
  }
}

const mapStateToProps = state =>({
  articleList:state.articleList.articleList,
})

export default connect(mapStateToProps)(Article);

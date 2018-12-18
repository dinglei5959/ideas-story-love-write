import React from 'react';
import style from './index.module.scss';

export default class ArticleItem extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    let { title , author , tags , date } = this.props;
    return <div className={style.article_item}>
      <header>
        <section>{title}</section>
        <section>
          <div> 
            <span>{author}</span> 
            <span className="mr-4 ml-4"> on </span>
            <span> {tags.map((text,index,arr)=>{ return `${text}${ index===arr.length-1 ? '':',' }` })} </span> 
          </div>
          
          &ensp;&ensp;|&ensp;&ensp;
          
          <div> {date} </div>
        </section>
      </header>

      <article>

      </article>
    </div>
  }
}
import React from 'react';
import style from './index.module.scss';


const list = [ 'losanji' , 'beaty','cool', 'gu' , 'home' , 'man' , 'muchang' , 'qiu' , 'sangu' ];

export default class Banner extends React.Component {
  render(){

   let index =  Math.floor(Math.random() * list.length);
    console.log(list[index]);
    return (<article className={style.banner_root}>
      <nav className={style.nav}>
        <section> DIYO </section>
        <section>Love, Story , Ideas And Write</section>
      </nav>
      
      {/* type    */}
      <div className={`${style.background} ${list[index]||'default'}`}></div>

    </article>)
  }
}
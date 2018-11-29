import React from 'react';
import style from './index.module.scss';

export default class Banner extends React.Component {
  render(){
    return (<article className={style.banner_root}>
      <nav className={style.nav}>
        <section> DIYO </section>
        <section>Love, Story , Ideas And Write</section>
      </nav>
      
      <div className={style.background}></div>

    </article>)
  }
}
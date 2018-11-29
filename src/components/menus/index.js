import React from 'react';

import { Close } from '@components';
import { CSSTransition , Transition } from 'react-transition-group';

import down from '@assets/banner/down.png'
import style from './index.module.scss';

import {  Archive, Author, Home, Subscribe, Tag } from '@assets/menus';

const navItem = [
  {name:'Home', icon:Home},
  {name:'Tags', icon:Tag},
  {name:'Archive', icon:Archive},
  {name:'Author', icon:Author},
  {name:'Subscribe', icon:Subscribe}
]


export default class Menus extends React.Component {

  constructor(){
    super();
    this.state = {
      rightBarShow:false
    }
  }

  close(){
    this.setState({
      ...this.state,
      rightBarShow:false
    })
  }

  open(){
    this.setState({
      ...this.state,
      rightBarShow:true
    })
  }

  getRightBarEle(){
    return <div className={style.rightbar}>
      <section className={style.title}>Navigation</section>

      <Close className={style.close} onClick={this.close.bind(this)}></Close>

      {/* 列表 */}
      <section className={style.item}>
        {navItem.map((item)=>{
          return (<div key={item.name}> <img src={item.icon} alt="" /> {item.name}  </div>)
        })}
      </section>
    </div>
  }

  render(){
    return (<article className={style.menu_root}>
      <div  onClick={this.open.bind(this)} className={style.button}>
        <img src={down} alt=""/>
        <div>Menus</div>
      </div>
      
      {/* 头部 */}
      {/* <CSSTransition in={this.state.rightBarShow} timeout={300} classNames={style.slide}> 
          {this.getRightBarEle()}
      </CSSTransition>  */}
       
        <CSSTransition in={this.state.rightBarShow} unmountOnExit timeout={300} classNames='slide'> 
          {this.getRightBarEle()}
        </CSSTransition> 
         
    </article>)
  }
}
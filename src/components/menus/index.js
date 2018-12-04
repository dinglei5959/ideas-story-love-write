import React from 'react';

import { Close } from '@components';
import { CSSTransition } from 'react-transition-group';

import down from '@assets/banner/down.png'
import style from './index.module.scss';

import { connect } from 'react-redux';




class Menus extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props)
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
        {this.props.navList.map((item)=>{
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


const mapStateToProps = state => {
  return { navList:state.listGo.navList }
}

export default connect(mapStateToProps,null)(Menus);
import React from 'react';

import { Close } from '@components';
import { CSSTransition } from 'react-transition-group';

import down from '@assets/banner/down.png'
import style from './index.module.scss';

import { connect } from 'react-redux';

import { addNavListItem , addNavListItemAsync } from '@lib/action/actions';


let innerText = '';

class Menus extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      rightBarShow:false,
      innerText:''
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

  /**
   * 右边栏
   */
  getRightBarEle(){
    let pending = false; // 节流标识符
    const inputHandler = (e) => {
     innerText = e.target.value;
    }
    /**
     * 添加操作添加了 
     */
    const addItem = () => {
      // reducer
      this.props.addNavListItem({name:innerText, icon:'test'});
    }

    /**
     * 异步添加操作添加了 
     */
    const addItemAsync = () => {
      // reducer
      this.props.addNavListItemAsync({name:innerText, icon:'test'});
    }


    return <div className={style.rightbar}>
      <section className={style.title}>Navigation</section>

      <Close className={style.close} onClick={this.close.bind(this)}></Close>

      {/* 列表 */}
      <section className={style.item}>
        {this.props.navList.map((item)=>{
          return (<div key={item.name}> <img src={item.icon} alt="" /> {item.name}  </div>)
        })}
      </section>
      
      {/* <section >
        <input onInput={inputHandler.bind(this)} type="text"/>
        <button onClick={addItem.bind(this)}>点击添加navItem</button>
        <button onClick={addItemAsync.bind(this)}>点击异步saga添加navItem</button>
      </section> */}

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

const mapDispatchToProps = dispatch =>{
  return {
    addNavListItem: item => {
      dispatch( addNavListItem(item) );
    },
    addNavListItemAsync: item => {
      dispatch( addNavListItemAsync(item) );
    }
  }
}

// mapDispatch 第一种写法
export default connect(mapStateToProps, mapDispatchToProps )(Menus);
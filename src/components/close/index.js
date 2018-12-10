import React from 'react';
import style from './index.module.scss';


export default class Close extends React.Component {

  /**
   * 测试了 componentWillReceiveProps 的死循环  其实是  改变父组件的state的时候  会出现
   * componentWillReceiveProps(newProps){
      console.log(newProps);
      newProps.onChange();
      } 
   */
  

  render(){
    return (<article onClick={this.props.onClick} className={`${style.close_root} ${this.props.className}`}></article>)
  }
}
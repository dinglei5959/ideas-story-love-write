import React from 'react';
import style from './index.module.scss';


export default class Close extends React.Component {
  render(){
    return (<article onClick={this.props.onClick} className={`${style.close_root} ${this.props.className}`}></article>)
  }
}
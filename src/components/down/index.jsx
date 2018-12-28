import React from 'react';
//import style from './index.module.scss';


export default class Close extends React.Component {

  render(){
    return (
      <svg t="1545299073886" className={`icon ${this.props.className}`} style={{color:this.props.color}} viewBox="0 0 1079 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2975" width={this.props.size||200} height={this.props.size||200}>
         <defs></defs>
         <path d="M 503.074 573.449 a 51.6864 51.6864 0 0 0 73.3184 0 l 369.707 -370.492 a 52.224 52.224 0 0 0 0 -73.6597 a 51.6693 51.6693 0 0 0 -73.3184 0 L 539.716 463.07 L 206.652 129.297 a 51.6693 51.6693 0 0 0 -73.3184 0 a 52.2667 52.2667 0 0 0 0 73.6597 l 369.741 370.492 Z m 369.707 -122.871 L 539.716 784.341 L 206.652 450.577 a 51.6693 51.6693 0 0 0 -73.3184 0 a 52.2496 52.2496 0 0 0 0 73.6427 l 369.732 370.492 a 51.7035 51.7035 0 0 0 73.3184 0 l 369.741 -370.492 a 52.2581 52.2581 0 0 0 0 -73.6427 a 51.7035 51.7035 0 0 0 -73.344 0 Z" 
           fill={this.props.color} p-id="2976">
         </path>
      </svg>
    )
  }
}
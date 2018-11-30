import React from 'react';
import Banner from '@components/banner';
import CssClasssicLayout from '@md/css-classic-layout.md';
//import style from './index.module.scss';

console.log(CssClasssicLayout);

export default class Home extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return (<article>
      <Banner></Banner>
      
      <div dangerouslySetInnerHTML={{__html: CssClasssicLayout}}></div>

    </article>)
  }
}
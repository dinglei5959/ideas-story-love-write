import React from 'react';
import Banner from '@components/banner';
import bannerImg from '@assets/banner/home.jpg';
import style from './index.module.scss';

export default class Home extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return (<article>
      <Banner></Banner>
    </article>)
  }
}
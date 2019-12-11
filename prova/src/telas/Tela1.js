import React from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import '../App.css';

function Tela1() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default Tela1;

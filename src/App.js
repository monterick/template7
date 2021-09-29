import './App.css';
import Header  from './template/Header';
import Menu from './template/Menu';
import Content from './template/Content';
import Footer from './template/Footer';
import React, { useState } from 'react';


function App() {

  const [visu, setVisu] = useState('none');

  function Toogle(){
    return(
      <div>
        <button style={{color:"white"}} onClick={() => setVisu('block')} className="btn btn-primary" ><i className="fa fa-align-justify"></i> </button>
      </div>
    );
  }
  function Toogle2(){
    return(
      <div onClick={() => setVisu('none')} >X</div>
    );
  }
 
  return (
   
    <div id="app">        
      <Menu visu={visu}>
        <Toogle2 />
      </Menu>
      <Header>
        <Toogle /> 
      </Header>
      <Content />
      <Footer />
    </div>
  );
}

export default App;

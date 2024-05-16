import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

function MyGame(){
  return(
  <>
  <h1>Merhaba</h1>
  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyGame></MyGame>

);


reportWebVitals();

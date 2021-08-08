import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './components/ImageSlider'
// import './components/slider.css'
import './components/index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';


const App = () => {
  return (
   <div className='body'>
      <div className='container mt-5 carousel'>
      <h1 className='slider_title'>React Image Carusel</h1>
      <ImageSlider/>
    </div>
   </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));
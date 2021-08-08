import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IMG from './img/1.jpg'
import IMG1 from './img/2.jpg'
import IMG2 from './img/3.jpg'
import IMG3 from './img/4.jpg'
const ImageSlider = ()=>{
  let settings={
    dots:true,
    Infinite:true,
    speed:500,
    slidesToShow:3,
    slidesTOScroll:1,
    cssEase:'linear'
  }
  return(
  <Slider {...settings}>
    <div className='card-wrapper'>
       <div className='card'>
         <div className='card-image'>
           <img src={IMG}/>
         </div>
         <ul className='social-icons'>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
         </ul>
         <div className='details'>
           <h2>John Doe <span className='job-title'>FD developer</span></h2>
         </div>
       </div>
     </div>
    <div className='card-wrapper'>
       <div className='card'>
         <div className='card-image'>
           <img src={IMG1}/>
         </div>
         <ul className='social-icons'>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
         </ul>
         <div className='details'>
           <h2>John Doe <span className='job-title'>FD developer</span></h2>
         </div>
       </div>
     </div>
     <div className='card-wrapper'>
       <div className='card'>
         <div className='card-image'>
           <img src={IMG2}/>
         </div>
         <ul className='social-icons'>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
         </ul>
         <div className='details'>
           <h2>John Doe <span className='job-title'>FD developer</span></h2>
         </div>
       </div>
     </div>
     <div className='card-wrapper'>
       <div className='card'>
         <div className='card-image'>
           <img src={IMG}/>
         </div>
         <ul className='social-icons'>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
         </ul>
         <div className='details'>
           <h2>John Doe <span className='job-title'>FD developer</span></h2>
         </div>
       </div>
     </div>
     <div className='card-wrapper'>
       <div className='card'>
         <div className='card-image'>
           <img src={IMG3}/>
         </div>
         <ul className='social-icons'>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
         </ul>
         <div className='details'>
           <h2>John Doe <span className='job-title'>FD developer</span></h2>
         </div>
       </div>
     </div>
     <div className='card-wrapper'>
       <div className='card'>
         <div className='card-image'>
           <img src={IMG}/>
         </div>
         <ul className='social-icons'>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
           <li><a href='#'><i className='fab fa-twitter-square'></i></a></li>
         </ul>
         <div className='details'>
           <h2>John Doe <span className='job-title'>FD developer</span></h2>
         </div>
       </div>
     </div>
  </Slider>
  );
};
export default ImageSlider
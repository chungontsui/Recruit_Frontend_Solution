import React, { ReactComponentElement } from 'react';
import './Slider.css';

class Slider extends React.Component{
    render(){
        return (
<div>
<header>
  <h3>Register Card Form</h3>
  <a href="#menu" className="toggle-menu" aria-role="button"><i className="fa fa-bars"></i></a>
</header>
        <nav role="navigation">
        <div id="menuToggle">

          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#"><li>This is menu content</li></a>
          </ul>
        </div>
      </nav></div>);
    }
}

export default Slider;
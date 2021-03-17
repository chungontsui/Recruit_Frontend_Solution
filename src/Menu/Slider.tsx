import React, { ReactComponentElement } from 'react';
import './Slider.css';

class Slider extends React.Component{
    render(){
        return (<nav role="navigation">
        <div id="menuToggle">

          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#"><li>This is menu content</li></a>
          </ul>
        </div>
      </nav>);
    }
}

export default Slider;
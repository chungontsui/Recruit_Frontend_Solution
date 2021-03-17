import React, { ReactComponentElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { userInfo } from 'os';
import Slider from './Menu/Slider';
import InputForm from './Form/InputForm';
import Greeting from './Greeting/Greeting';

import UserModel from './Models/UserModel';

const user = {
  Id: 1,
  FirstName: "Joe",
  LastName: "Blog"
}
function App() {

  return (
    <div className="App">
      <Slider></Slider>
      <div className="container" style={{marginTop: '100%'}}>
        <div className="row">
          <div className="col">
            <InputForm></InputForm>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

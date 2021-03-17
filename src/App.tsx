import React, { ReactComponentElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { userInfo } from 'os';
import Slider from './Menu/Slider';
import InputForm from './Form/InputForm';

// function SmallHeader(){
//     return <h1>This is the header {10 * 9}</h1>;
// }



// const ValidatorFunctions = {
//   NumberOnly: (InputNum:any) => { let _result = !isNaN(InputNum); return {result: _result, message: "This field must have numbers only"};},
//   NotEmpty: (Input:string) => { let _result = Input.length > 0; return {result: _result, message: "This field must not by empty"};}
// }



// class Slider extends React.Component{
//   render(){
//       return (<nav role="navigation">
//       <div id="menuToggle">

//         <input type="checkbox" />

//         <span></span>
//         <span></span>
//         <span></span>

//         <ul id="menu">
//           <a href="#"><li>Home</li></a>
//           <a href="#"><li>About</li></a>
//           <a href="#"><li>Info</li></a>
//           <a href="#"><li>Contact</li></a>
//           <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
//         </ul>
//       </div>
//     </nav>);
//   }
// }

function App() {
  return (
    <div className="App">
      <Slider></Slider>
      <InputForm></InputForm>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coding in React
        </a>
      </header> */}
    </div>
  );
}

export default App;

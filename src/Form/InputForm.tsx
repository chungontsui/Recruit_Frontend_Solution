import React, { ReactComponentElement } from 'react';
import UserInput from '../Models/UserInput';

class InputForm extends React.Component{
    constructor(props:UserInput){
      super(props);
      let initalValues:UserInput = {
        creditcard: '',
        cvc: '',
        expiry: new Date()
      }
      this.state = initalValues
    }
    changeHandler = (event:any)=>{
      this.setState({creditcard: event.target['creditcard'].value})
      this.setState({cvc: event.target['cvc'].value})
      this.setState({expiry: event.target['expiry'].value})
    }
    validationHandler = (event:any) => {
      switch(event.target.name){
        case "creditcard":

        break;
        case "cvc":
        break;
        case "expiry":
        break
      }
    }
    render(){
      return (<form action='#' onSubmit={this.changeHandler}>
          <input type='text' name='creditcard' onBlur={this.validationHandler} /><input type='text' name='cvc' /><input type='date' name='expiry' /><input type='submit' /></form>)
    }
  }

  export default InputForm;
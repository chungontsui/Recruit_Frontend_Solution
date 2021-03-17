import React, { ReactComponentElement } from 'react';
import UserInput from '../Models/UserInput';

class InputForm extends React.Component {
  constructor(props: UserInput) {
    super(props);
    let initalValues: UserInput = {
      creditcard: '',
      cvc: '',
      expiry: new Date()
    }
    this.state = initalValues
  }
  changeHandler = (event: any) => {
    this.setState({ creditcard: event.target['creditcard'].value })
    this.setState({ cvc: event.target['cvc'].value })
    this.setState({ expiry: event.target['expiry'].value })
  }
  validationHandler = (event: any) => {
    switch (event.target.name) {
      case "creditcard":
        break;
      case "cvc":
        break;
      case "expiry":
        break
    }
  }
  render() {
    return (<form action='#' onSubmit={this.changeHandler}>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='Credit Card Nunber' name='creditcard' onBlur={this.validationHandler} />
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='CVC' name='cvc' />
      </div>
      <div className='form-group'>
          <input type='date' className='form-control' placeholder='expiry' name='expiry' />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>)
  }
}

export default InputForm;
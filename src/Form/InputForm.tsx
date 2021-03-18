import React, { ReactComponentElement } from 'react';
import ValidatorFunction from './ValidatorFunction';
import { UserInfo } from 'os';

interface validation_error{
  HasError: boolean,
  ErrorMessage : string
}

interface IProps{}

interface IState{
  creditcard_error? : validation_error,
  cvc_error? : validation_error,
  expiry_error? : validation_error,
  creditcard_number: string,
  cvc: string,
  expiry: Date
}

const ValidationErrorMessage = ({displayVal, message} : {displayVal:string, message:string}) => {
  return <span id="creditcard_error" style={{ display : displayVal, float: "left", color: "red"}} className="form-text text-muted mb-2">{message}</span>
}

class InputForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      creditcard_number : '',
      cvc : '',
      expiry : new Date(2000, 1, 1),
      creditcard_error : { HasError : false, ErrorMessage : ''},
      cvc_error : { HasError : false, ErrorMessage : ''},
      expiry_error : { HasError : false, ErrorMessage : ''}
    }
  }
  SubmitHandler = (event: any) => {
    console.log(`Credit Card Number: ${this.state.creditcard_number}`);
    console.log(`CVC: ${this.state.cvc}`);
    console.log(`Expiry: ${this.state.expiry}`);
    return false;
  }
  validationHandler = (event: any) => {
    switch (event.target.name) {
      case "creditcard":
        let creditcard_hasError = false;
        let creditcard_ErrorMessage = [];

        let creditcard_testResult = ValidatorFunction.NotEmpty(event.target.value);
        creditcard_hasError = !creditcard_testResult.pass;
        if(!creditcard_testResult.pass) creditcard_ErrorMessage.push(creditcard_testResult.message);
        creditcard_testResult = ValidatorFunction.NumberOnly(event.target.value);
        creditcard_hasError = !creditcard_testResult.pass;
        if(!creditcard_testResult.pass) creditcard_ErrorMessage.push(creditcard_testResult.message);

        this.setState({creditcard_error : { HasError : creditcard_hasError, ErrorMessage : creditcard_ErrorMessage.join('; ') }})
        break;
      case "cvc":
          let cvc_hasError = false;
          let cvc_ErrorMessage = [];

          let cvc_testResult = ValidatorFunction.NotEmpty(event.target.value);
          cvc_hasError = !cvc_testResult.pass;
          if(!cvc_testResult.pass) cvc_ErrorMessage.push(cvc_testResult.message);
          cvc_testResult = ValidatorFunction.NumberOnly(event.target.value);
          cvc_hasError = !cvc_testResult.pass;
          if(!cvc_testResult.pass) cvc_ErrorMessage.push(cvc_testResult.message);

          this.setState({cvc_error : { HasError : cvc_hasError, ErrorMessage : cvc_ErrorMessage.join('; ') }})
          break;
        break;
      case "expiry":
          let expiry_hasError = false;
          let expiry_ErrorMessage = "";

          let expiry_testResult = ValidatorFunction.NotEmpty(event.target.value);
          expiry_hasError = !expiry_testResult.pass;
          if(!expiry_testResult.pass) expiry_ErrorMessage = expiry_testResult.message;

          this.setState({expiry_error : { HasError : expiry_hasError, ErrorMessage : expiry_ErrorMessage }})
        break
    }
  }
  render() {
    return (<form action='#' onSubmit={this.SubmitHandler}>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='Credit Card Nunber' name='creditcard' onBlur={this.validationHandler} />
        {this.state.creditcard_error!.HasError ? <ValidationErrorMessage displayVal='block' message={this.state.creditcard_error!.ErrorMessage} /> : null}
      </div>
      <div className='form-group'>
        <input type='text' className='form-control' placeholder='CVC' name='cvc' onBlur={this.validationHandler} />
        {this.state.cvc_error!.HasError ? <ValidationErrorMessage displayVal='block' message={this.state.cvc_error!.ErrorMessage} /> : null}
      </div>
      <div className='form-group'>
          <input type='date' className='form-control' placeholder='expiry' name='expiry' onBlur={this.validationHandler}/>
          {this.state.expiry_error!.HasError ? <ValidationErrorMessage displayVal='block' message={this.state.expiry_error!.ErrorMessage} /> : null}
      </div>
      <button type="submit" className="btn btn-primary" disabled={this.state.creditcard_error!.HasError || this.state.cvc_error!.HasError || this.state.expiry_error!.HasError}>Submit</button>
    </form>)
  }
}

export default InputForm;
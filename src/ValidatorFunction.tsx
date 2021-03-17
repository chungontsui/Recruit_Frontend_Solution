const ValidatorFunctions = {
    NumberOnly: (InputNum:any) => { let _result = !isNaN(InputNum); return {pass: _result, message: "This field must have numbers only"};},
    NotEmpty: (Input:string) => { let _result = Input.length > 0; return {pass: _result, message: "This field must not by empty"};}
}

export default ValidatorFunctions;
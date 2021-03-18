import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Greeting from './Greeting/Greeting';
import UserModel from './Models/UserModel';
import InputForm from './Form/InputForm';

import ValidatorFunction from './Form/ValidatorFunction';

describe("Test Components", () => {
  test('Greeting elements', () => {
    const user : UserModel = {
      FirstName : "Chung",
      LastName : "Tsui",
      Id: 10
    }
    render(<Greeting user={user} />);
    const greetingH1 = document.querySelector('#greeting');
    expect(greetingH1?.innerHTML).toContain(user.FirstName);
  })

  test('InputForm elements', () => {
    render(<InputForm />);
    const inputElements = document.querySelectorAll("input");
    expect(inputElements.length).toBe(3);
  });
})
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Test ValidatorFunctions", () => {
  const TestCases_NotEmpty = [
    { input: "", expectResult: false },
    { input: "something", expectResult: true },
  ]
  TestCases_NotEmpty.forEach((t) => {
    test('Test NotEmpty', () => {
      const testresult = ValidatorFunction.NotEmpty(t.input);
      expect(testresult.pass).toBe(t.expectResult);
    });
  });

  const TestCases_NumberOnly = [
    { input: "", expectResult: true, expectMessage: "" },
    { input: "67bc", expectResult: false, expectMessage: "This field must have numbers only" },
    { input: "67", expectResult: true, expectMessage: "" }
  ]

  TestCases_NumberOnly.forEach(t => {
    test('Test NumberOnly', () => {
      const testresult = ValidatorFunction.NumberOnly(t.input);
      expect(testresult.pass).toBe(t.expectResult);
      expect(testresult.message).toBe(t.expectMessage);
    });
  })


});




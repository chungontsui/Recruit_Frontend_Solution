import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import ValidatorFunction from './ValidatorFunction';

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
    { input: "", expectResult: false },
    { input: "abc", expectResult: false },
    { input: "67a", expectResult: false },
    { input: "67", expectResult: true },
    { input: "67", expectResult: true }
  ]

  TestCases_NumberOnly.forEach(t => {
    test('Test NumberOnly', () => {
      const testresult = ValidatorFunction.NumberOnly(t.input);
      expect(testresult.pass).toBe(t.expectResult);
    });
  })


});




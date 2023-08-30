import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

describe('Click the checkbox to change the disabled property of the button', () => {
  // 沒有勾選時按鈕 disabled
  test('Unable to press the button at first' ,() => {
    render(<Form />);
    expect(screen.getByRole('button')).toBeDisabled();
  })
  // 有勾選時按鈕 enabled
  test('The button can be turned on when the checkbox is checked' ,() => {
    render(<Form />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('button')).not.toBeDisabled();
  })
})
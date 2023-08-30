import React from 'react';
// import { render, fireEvent, cleanup } from 'react-testing-library';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('測試點擊功能是否正常', () => {
  // render 畫面
  render(<Counter />);
  // 首先找到 +1 button
  let addButton = screen.getByText(/點我加 1/i);
  fireEvent.click(addButton);
  expect(screen.getByTestId('display_count').textContent).toBe('點了1下')

  // 接著找到 +2 button
  addButton = screen.getByText(/點我加 2/i);
  fireEvent.click(addButton);
  expect(screen.getByTestId('display_count').textContent).toBe('點了3下');
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../Pages/App';

const createComponent = () => {
  const wrapper = render(<App />);
  
  return wrapper;
};

test('Should match snapshot', () => {
  const wrapper = createComponent();

  expect(wrapper).toMatchSnapshot();
});

test('Should render Header', () => {
  const wrapper = createComponent();

  expect(wrapper.getByTestId("header")).toBeInTheDocument()
});

test('Should render Footer', () => {
  const wrapper = createComponent();

  expect(wrapper.getByTestId("footer")).toBeInTheDocument()
});

test('Should render Table', () => {
  const wrapper = createComponent();

  expect(wrapper.getByTestId("table")).toBeInTheDocument()
});

test('Should render Pagination', () => {
  const wrapper = createComponent();

  expect(wrapper.getByTestId("pagination")).toBeInTheDocument()
});

test('Should render Drawer', () => {
  const wrapper = createComponent();

  expect(wrapper.getByTestId("drawer")).toBeInTheDocument()
});




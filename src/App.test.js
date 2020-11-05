import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { Shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import shallow from 'enzyme/build/shallow';
import React from "react"

// set up enzyme' react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factor function to create a ShallowWrapper for the app component.
 * @funtion setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);
const findByText = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByText(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);

});


test("renders button", () => {
  const wrapper = setup()
  const button = findByText(wrapper, 'increment-button');
  expect(button.length).toBe(1);
})

test("renders counter display", () => {
  const wrapper = setup();
  const counterDispaly = findByText(wrapper, 'counter-display');
  expect(counterDispaly.length).toBe(1);
})

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByText(wrapper, "count").text();
  expect(count).toBe("0");
})

test("clicking on button increments counter dispalay", () => {
  const wrapper = setup();
  //Find the button
  const button = findByText(wrapper, 'increment-button');
  //click the button
  button.simulate('click');
  //find the display, and test that the number has been incremented;
  const count = findByText(wrapper, "count").text();
  expect(count).toBe("1");
})


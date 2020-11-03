import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { Shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import shallow from 'enzyme/build/shallow';


// set up enzyme' react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});


test("renders button", () => {

})

test("renderws counter display", () => {

})

test("counter starts at 0", () => {

})

test("clicking on button increments counter dispalay", () => {

})


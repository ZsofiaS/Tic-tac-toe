import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../components/App';

describe('renders App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders App correctly', () => {
    const appComponent = shallow(<App />);
    expect(toJson(appComponent)).toMatchSnapshot();
  });
});

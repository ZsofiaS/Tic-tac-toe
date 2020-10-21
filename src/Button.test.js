import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './Button';

describe('renders Button component', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
});

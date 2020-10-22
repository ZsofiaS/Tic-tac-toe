import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Board, Square } from '../components/Board';

describe('renders Board components', () => {
  it('renders without crashing', () => {
    shallow(<Board />);
  });
});

describe('renders Square components', () => {
  it('renders without crashing', () => {
    shallow(<Square />);
  });
});

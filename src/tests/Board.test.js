import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Board, Square } from '../components/Board';

describe('renders Board component', () => {
  it('renders without crashing', () => {
    shallow(<Board />);
  });
  it('renders Board correctly', () => {
    const boardComponent = shallow(<Board />);
    expect(toJson(boardComponent)).toMatchSnapshot();
  });
});

describe('renders Square component', () => {
  it('renders without crashing', () => {
    shallow(<Square />);
  });
  it('renders Square correctly', () => {
    const squareComponent = shallow(<Square />);
    expect(toJson(squareComponent)).toMatchSnapshot();
  });
});

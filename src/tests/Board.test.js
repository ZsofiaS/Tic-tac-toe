import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Board, Square } from '../components/Board';
import Button from '../components/Button';

let boardComponent;

beforeEach(() => {
  boardComponent = shallow(<Board />);
});

describe('renders Board component', () => {
  it('renders without crashing', () => {
    shallow(<Board />);
  });
  it('should render 9 squares', () => {
    expect(boardComponent.find(Square)).toHaveLength(9);
  });
  it('should render 1 button', () => {
    expect(boardComponent.find(Button)).toHaveLength(1);
  });
  it('renders Board correctly', () => {
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

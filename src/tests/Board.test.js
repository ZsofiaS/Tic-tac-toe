import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Board, Square, BoardContainer } from '../components/Board';
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
  it('should render 1 boardContainer', () => {
    expect(boardComponent.find(BoardContainer)).toHaveLength(1);
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
  it('should call onClick function when square clicked', () => {
    const mockedHandler = jest.fn();
    const clickHandler = mockedHandler;
    const square = shallow(<Square onClick={clickHandler} />);
    expect(mockedHandler).not.toHaveBeenCalled();
    square.simulate('click');
    expect(mockedHandler).toHaveBeenCalled();
  });
  it('renders Square correctly', () => {
    const squareComponent = shallow(<Square />);
    expect(toJson(squareComponent)).toMatchSnapshot();
  });
});

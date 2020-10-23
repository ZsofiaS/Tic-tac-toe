import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../components/Button';

describe('renders Button component', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
  it('should call onClick function when button clicked', () => {
    const mockedRestartGame = jest.fn();
    const restartGame = mockedRestartGame;
    const button = shallow(<Button onClick={restartGame} />);
    expect(mockedRestartGame).not.toHaveBeenCalled();
    button.simulate('click');
    expect(mockedRestartGame).toHaveBeenCalled();
  });
  it('renders Button correctly', () => {
    const buttonComponent = shallow(<Button />);
    expect(toJson(buttonComponent)).toMatchSnapshot();
  });
});

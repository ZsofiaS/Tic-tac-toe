import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Game from '../components/Game';

describe('renders Game component', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });
  it('renders Game correctly', () => {
    const gameComponent = shallow(<Game />);
    expect(toJson(gameComponent)).toMatchSnapshot();
  });
});

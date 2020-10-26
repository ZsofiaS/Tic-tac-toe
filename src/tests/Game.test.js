import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Game, { ResultTitle } from '../components/Game';
import { Board } from '../components/Board';

let gameComponent;

beforeEach(() => {
  gameComponent = shallow(<Game />);
});

describe('renders Game component', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });
  it('should render a p element', () => {
    expect(gameComponent.find(ResultTitle)).toHaveLength(1);
  });
  it('should render a board component', () => {
    expect(gameComponent.find(Board)).toHaveLength(1);
  });
  it('renders Game correctly', () => {
    expect(toJson(gameComponent)).toMatchSnapshot();
  });
});

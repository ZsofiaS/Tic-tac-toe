import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../components/App';
import Game from '../components/Game';

let appComponent;

beforeEach(() => {
  appComponent = shallow(<App />);
});

describe('renders App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('should render a h1 element', () => {
    expect(appComponent.find('h1')).toHaveLength(1);
  });
  it('should render a p element', () => {
    expect(appComponent.find('p')).toHaveLength(1);
  });
  it('should render a Game component', () => {
    expect(appComponent.find(Game)).toHaveLength(1);
  });
  it('renders App correctly', () => {
    expect(toJson(appComponent)).toMatchSnapshot();
  });
});

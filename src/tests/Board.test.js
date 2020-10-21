import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Board from '../components/Board';

describe('renders Board components', () => {
    it('renders without crashing', () => {
        shallow(<Board />);
    });
});
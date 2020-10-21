import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Board from '../components/Board';
import Square from '../components/Board';

describe('renders Square components', () => {
    it('renders without crashing', () => {
        shallow(<Square />);
    });
});
import {Characters} from '../components/characters';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('<Characters /> ', ()=>{
    it('should get one link', ()=>{
        const props = {
            characters: [{name : 'Jedi', url : 'http://jedi'}],
            handleClick: jest.fn()
        }
            const wrapper = shallow(<Characters {...props} />);
            expect(wrapper.find('li').length).toBe(1);
    } )

    it('should handle click with current Character object ', ()=>{
        const props = {
            characters: [{name : 'Jedi', url : 'http://jedi'}],
            handleClick: jest.fn()
        }
            const wrapper = shallow(<Characters {...props} />);
            wrapper.find('li a').simulate('click');
            expect(props.handleClick).toHaveBeenLastCalledWith({name : 'Jedi', url : 'http://jedi'});

    })

    it('should handle click with current Character object ', ()=>{
        const props = {
            characters: [{name : 'Jedi', url : 'http://jedi'}],
            handleClick: jest.fn()
        }
            const wrapper = shallow(<Characters {...props} />);
            wrapper.find('li a').simulate('click');
            expect(wrapper.find('.active')).toBeDefined();

    })

})
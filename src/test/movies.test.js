import MovieList from '../components/movieList'
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('<MovieList /> ', ()=>{
    it("Should movieList render", () =>{
        const props = {
            movies : [{ title : 'test', release_date : new Date('2018-01-01') }],
            hasErrored : false,
            isLoading : false
        }
        const wrapper =  shallow(<MovieList {...props}/>);
        expect(wrapper.find(".movieContent").length).toBe(1);
    })

    it("Should get error", () =>{
        const props = {
            movies : [{ title : 'test', release_date : new Date('2018-01-01') }],
            hasErrored : true,
            isLoading : false
        }
        const wrapper =  shallow(<MovieList {...props}/>);
        expect(wrapper.find(".error").text()).toBe("Sorry! There was an error loading the items");
    })

    it("Should get loading", () =>{
        const props = {
            movies : [{ title : 'test', release_date : new Date('2018-01-01') }],
            hasErrored : false,
            isLoading : true
        }
        const wrapper =  shallow(<MovieList {...props}/>);
        expect(wrapper.find(".loading").text()).toBe("Loading…");
    })

})
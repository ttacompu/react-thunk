import React, { Component } from 'react';
import {fetch} from 'whatwg-fetch';
import {itemsFetchData} from '../actions/items';

class ItemList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchData('https://swapi.co/api/people/1/');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.items.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        );


    }
}
export default ItemList;
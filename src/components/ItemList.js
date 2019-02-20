import React, { Component } from 'react';


class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(preProps) {
        if(preProps.currentCharacter.url !== this.props.currentCharacter.url ){
            this.props.fetchData(this.props.currentCharacter.url);
        }
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div>
                {this.props.items.map((item, i) => (
                    <div key={i} className="movieContent">
                        <div>
                            <label>Title :</label>  <span className="title">{item.title} </span>
                        </div>
                        <div>
                            <label>Release Date :</label>{JSON.stringify(item.release_date)}
                        </div>
                    </div>
                ))}
            </div>
        );


    }
}
export default ItemList;
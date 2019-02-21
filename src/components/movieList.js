import React, { Component } from 'react';
import moment from 'moment';



class MovieList extends Component {
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
            return <p className="error">Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p className="loading">Loading…</p>;
        }
        return (
            <div>
                {this.props.movies.map((movie, i) => (
                    <div key={i} className="movieContent">
                        <div>
                            <label>Title :</label>  <span className="title">{movie.title} </span>
                        </div>
                        <div>
                            <label>Release Date :</label>{moment(movie.release_date).format('YYYY-MM-DD hh:mm')}
                        </div>
                    </div>
                ))}
            </div>
        );


    }
}
export default MovieList;
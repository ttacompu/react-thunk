import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myStyle.scss';
import MovieList from './components/movieList'
import {Characters} from './components/characters'
import { configureStore } from './store/configureStore'
import { moviesFetchData } from './actions/movies'
import {currentCharacterAction} from './actions/characters'
import { connect, Provider } from 'react-redux';


const store = configureStore();

const mapStateMovieToProps = (state) => {
  
  return {
    hasErrored: state.movieHasErrored,
    isLoading: state.movieIsLoading,
    movies: state.movies,
    currentCharacter : state.currentCharacter
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(moviesFetchData(url))
  }
}
const MovieListContainer = connect(mapStateMovieToProps, mapDispatchToProps)(MovieList)

const mapCurrentCharacterMapToProps = (state) =>{
  return {
    characters : [{
      "name": "Luke Skywalker",
      "url": "https://swapi.co/api/people/1/"
    },
    {
      "name": "Darth Vader",
      "url": "https://swapi.co/api/people/4/"
    },
    {
      "name": "Obi-wan Kenobi",
      "url": "https://swapi.co/api/people/unknown/"
    }, 
    {
      "name": "R2-D2",
      "url": "https://swapi.co/api/people/3/"
    }],
    currentCharacter : state.currentCharacter.name

  }
}

const mapDispatchCurrentCharacterToProps = (dispatch) =>{
  return {
    handleClick : (currentCharacter) => dispatch(currentCharacterAction(currentCharacter))
  }
}

const CurrentCharacter = connect(mapCurrentCharacterMapToProps, mapDispatchCurrentCharacterToProps)(Characters);

const App = () => {
  return (
    <div>
      
      <div className="header">Choose Your Star War Character</div>
      <div className="content">
        <div className="leftMenu">
          <CurrentCharacter />
          </div>
        <div className="rightContent">
            <MovieListContainer />
            
        </div>
      </div>
    </div>
  )
}




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));


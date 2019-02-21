import { combineReducers} from 'redux';
import { movies, movieHasErrored, movieIsLoading} from './movies';
import {currentCharacter} from './currentCharacter';

export default combineReducers({
    movies, movieHasErrored, movieIsLoading, currentCharacter

})
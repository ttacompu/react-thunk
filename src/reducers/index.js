import { combineReducers} from 'redux';
import {items, itemsHasErrored, itemsIsLoading} from './items';
import {currentCharacter} from './currentCharacter';

export default combineReducers({
    items, itemsHasErrored, itemsIsLoading, currentCharacter

})
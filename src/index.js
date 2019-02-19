import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss';
import ItemList from './components/ItemList'
import {Characters} from './components/characters'
import { configureStore } from './store/configureStore'
import { itemsFetchData } from './actions/items'
import {currentCharacterAction} from './actions/characters'
import { connect, Provider } from 'react-redux';


const store = configureStore();

const mapStateItemToProps = (state) => {
  
  return {
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    items: state.items,
    currentCharacter : state.currentCharacter
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  }
}
const ItemListContainer = connect(mapStateItemToProps, mapDispatchToProps)(ItemList)

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
    }]

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
            <ItemListContainer />
            
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


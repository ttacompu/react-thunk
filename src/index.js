import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss';
import ItemList from './components/ItemList'
import { configureStore } from './store/configureStore'
import { itemsFetchData } from './actions/items'
import { connect, Provider } from 'react-redux';


const store = configureStore();

const mapStateItemToProps = (state) => {
  return {
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    items: state.items

  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  }
}
const ItemListContainer = connect(mapStateItemToProps, mapDispatchToProps)(ItemList)

const App = () => {
  return (
    <div>
      
      <div className="header">Choose Your Star War Character</div>
      <div className="content">
        <div className="leftMenu">
          left menu
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


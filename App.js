import React from 'react';
import Navigation from "./navigation/Navigation"
import {createStore} from "redux"
import {Provider} from "react-redux"
import favoriteReducers from "./store/reducers/favoriteReducers"


export default function App() {
  const store = createStore(favoriteReducers)
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


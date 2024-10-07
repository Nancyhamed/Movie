import './App.css';
import React from 'react';
import Watchlist from './Pages/Watclist'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    < >
      <Provider store={store}>
        <Watchlist />
      </Provider>
    </>
  );
}

export default App;

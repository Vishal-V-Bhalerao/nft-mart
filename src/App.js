
import './App.css';
import React from "react";
import { Provider } from 'react-redux';
import { MarketView } from './views/marketView';
import { store } from './store/store';
import { TopNavigationPanel } from './components/topNavigationPanel';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TopNavigationPanel></TopNavigationPanel>
        <MarketView></MarketView>
      </div>
    </Provider>
  );
}

export default App;

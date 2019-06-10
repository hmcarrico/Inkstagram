import React from 'react';
import routes from './routes';
import Header from './Components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='push-top'>
        {routes}
      </div>
    </div>
  );
}

export default App;

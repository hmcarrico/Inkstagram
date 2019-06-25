import React from 'react';
import routes from './routes';
import Header from './Components/Header/Header';
import axios from 'axios'
import './App.scss';

class App extends React.Component{
  componentDidMount(){
    axios.get('/api/getpost').then(res => {
      console.log(res.data)
      console.log('HELLO')
    })
  }
  render(){
  return (
    <div className="App">
      <Header />
      <div className='push-top'>
        {routes}
      </div>
    </div>
  );
  }
}

export default App;

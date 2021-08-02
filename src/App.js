import React from 'react'
import './App.css';
import Home from './components/Home'
import ShowImage from './components/ShowImage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
   <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/showImage/:id" component={ShowImage} />
      </Switch>
   </>
  );
}

export default App;

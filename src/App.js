import React, { Component } from 'react';
import Layout from './components/Layout';
import {Switch,Route} from 'react-router-dom';
import Weather from './components/Weather';
import Favorites from './components/Favorites'
class App extends Component {
  
  render() {
    const route=(
      <Switch>
        <Route exact path="/" component={Weather} />
        <Route path="/favorite" component={Favorites} />
        <Route component={() => (<div>404 Not found </div>)} />
      </Switch>
      
    )
    return (
      <Layout>
        {route}
      </Layout>
    );
  }
}

export default App;
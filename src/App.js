import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Navigation from './Components/Nav/Navigation'

//Pages
import Login from './Containers/Login/Login.js'

import MenuStore from './Containers/Users/Store/Menu/MenuStore';
import MenuUser from './Containers/Users/User/Menu/MenuUser';

import Sweet from './Containers/Users/Store/Menu/Sweet/Sweet';
import Pastry from './Containers/Users/Store/Menu/Pastry/Pastry';
import packagedSavoury from './Containers/Users/Store/Menu/packagedSavoury/PackagedSavoury';
import Impulse from './Containers/Users/Store/Menu/Impulse/Impulse';
import Other from './Containers/Users/Store/Menu/Other/Other'
import Drop from './Components/Dropdown/Drop';


class App extends React.Component{
  render(){
    return(
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/store' component={MenuStore}/>
        <Route exact path='/user' component={MenuUser}/>

        <Route exact path='/sweet' component={Sweet}/>
        <Route exact path='/pastry' component={Pastry}/>
        <Route exact path='/packagedSavoury' component={packagedSavoury}/>
        <Route exact path='/impulse' component={Impulse}/>
        <Route exact path='/other' component={Other}/>
        <Route exact path='/drop' component={Drop}/>

    </Switch>
  </BrowserRouter>
    )
  }
}
export default App;

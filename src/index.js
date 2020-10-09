import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

//Components
import Home from './components/home';
import Profiles from './components/profiles';
import Posts from './components/posts';
import PostItem from './components/post_item';
import User from './components/user';


const App = () => {
return (
  <BrowserRouter>
      <div>
        <header>
          <NavLink to='/'>Home</NavLink><br/>
          <NavLink 
          to='/posts'
          activeStyle={{color:'red'}}
          >Posts</NavLink><br/>
          <NavLink 
          to='/profiles'
          activeStyle={{color:'red'}}
          >Profiles</NavLink><br/>
          <NavLink to='/user'>User</NavLink><br/>
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem}/> 
          <Route path="/profiles" component={Profiles}/> 
          <Route path="/posts" component={Posts}/> 
          <Route path="/" exact component={Home}/> 
          <Route path="/user" component={User}/> 
          <Route render={() =><div><h1>Oopss 404</h1></div>} />
        </Switch>    
      </div>
  </BrowserRouter>
)
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
)
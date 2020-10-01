import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

//Components
import Home from './components/home';
import Profiles from './components/profiles';
import Posts from './components/posts';
import PostItem from './components/post_item'

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
          >Profiles</NavLink>
        </header>
        <Switch>
          <Redirect from="/posts" to="/" />
          <Route path="/posts/:id/:username" component={PostItem}/> 
          <Route path="/profiles" component={Profiles}/> 
          <Route path="/posts" component={Posts}/> 
          <Route path="/" component={Home}/> 
        </Switch>    
      </div>
  </BrowserRouter>
)
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//Components
import Home from './components/home';
import Profiles from './components/profiles';
import Posts from './components/posts';

const App = () => {
return (
  <BrowserRouter>
      <div>
        <header>
          <Link to='/'>Home</Link><br/>
          <Link to='/posts'>Posts</Link><br/>
          <Link to={{
            pathname: '/profiles',
            hash: '#entryArgument',
            search: '?index=1'
          }}>Profiles</Link>
        </header>
        <Route path="/" exact component={Home}/> 
        <Route path="/posts" component={Posts}/> 
        <Route path="/profiles" component={Profiles}/> 
      </div>
  </BrowserRouter>
)
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
)
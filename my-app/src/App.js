import React from 'react';
import {BrowserRouter as Router,
        Link,
        Route,
        Redirect,
      } from 'react-router-dom';
import './App.css';
import  A from './components/A'
import B from './components/B'
import C from './components/C'
import Home from './components/Home'
import D from './components/D'
import Child from './components/child'
function App() {
  return (
    <div className="App">
        <Router>
              <Link to='/'>Home  </Link>|
              <Link to='/a/11'>aaa  </Link>|
              
              <Link to="/b">bbbb</Link>|
              <Link to="/c">cccc</Link>|
              <Link to="/d">dddd</Link>|
              <Link to="/child">child</Link>||
              <Link to="/new">new</Link>||


              {/*<Route  exact path="/" component={Home}></Route>
              //<Route path="/b" component={Test2}></Route>
           //<Route path='/a' component={Test}></Route> */}
              
                  <Route path="/d" render={()=>{
                    return(<div>
                      <h1>d1</h1>
                      <D></D>
                </div>) 
                  }
                      
                  }></Route>
                  <Route path="/c" component={C}></Route>   
                  <Route path="/b" component={B}></Route>
                  <Route path='/a/:id' component={A}></Route>
                  <Route exact  path="/" component={Home}></Route>
                  <Route  path="/child"  children={()=>{
                    return(
                    <div>
                        <Child></Child>
                    </div>) 
                  }}></Route>
                  <Route path='/new' render={()=>{
                    return (<Redirect to="/">  </Redirect>)
                  }}></Route>
                  
  
        </Router>
       
    </div>
  );
}

export default App;
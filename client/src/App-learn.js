import React, {Component} from 'react';
// 'react' => inside node_modules
// Components are independent and reusable bits of code.
// Building blocks of any react application
// Component - same purpose as JavaScript functions

import {BrowserRouter as Router, Route} from "react-router-dom";
// Router is package which used to create routing in a application
// React Router keeps your UI in sync with the URL
// Route is a endpoint

import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Landing from './components/Landing';
import FileUpload from './components/FileUpload';
import AssignmentList from './components/AssignmentList';

// Doesn't have its own state or needs to access a lifecycle hook - Functional Component 
// takes props and returns JSX
// Do not have state or lifecycle methods
// Easier to read, debug, and test.
// Performance benefits, decreased coupling, and greater reusability.

// React lifecycle method explained.
// Mounting, that is putting inserting elements into the DOM.
// Updating, which involves methods for updating components in the DOM.
// Unmounting, that is removing a component from the DOM.

// componentDidMount() a lifecycle method that runs after the component is mounted and rendered to the DOM.
// It is great when you want to do an interval function or an asynchronous request. 

// componentDidUpdate() after render and actual dom has been updated.
// For state management you can use - Class Component.
// React lifecycle methods can be used inside class components.
// It’s a good idea to make http requests here. 
// You can call setState() in this method.

// componentWillUnmount() immediately before removing component from DOM.
// You should use that to remove event listeners, clear intervals and cancel requests.

// Stateless components are simple functional component without having a local state
// Stateful component can contains the state object and event handling function, user actions as well

// The props are variable that passed to the component.
// The state is javascript object that managed within the component.
// The setState used to update the state of a component.  
// This is an asynchronous. 

// Managing states in a React application is one of the biggest challenges
// Using React Hooks or Redux

// Redux is a javascript library that used to manage application state.
// Actions are payloads of information that send data from your application to your store. 
// Actions are plain JavaScript objects.
// Actions must have a type property that indicates the type of action being performed. 
// Types should typically be defined as string constants. 
class App extends Component {
  render(){
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/uploads" component={FileUpload} />
            <Route exact path="/assignments" component={AssignmentList} />
          </div>
          
        </div>
      </Router> 
  )
  }
}

export default App;

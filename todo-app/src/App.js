import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import {FirstComponent} from './components/learning-examples/FirstComponent';
import {SecondComponent} from './components/learning-examples/SecondComponent';
import {ThirdComponent} from './components/learning-examples/ThirdComponent';
import {Counter} from './components/counter/Counter'
import { TodoApp } from './components/todo/TodoApp';
import './App.css';
import './bootstrap.css';
class App extends Component{

  render() {
    return (
      <div className="App">
          
        {/* <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <Counter></Counter> */}
       { /*<Counter/> */}
       <TodoApp/>
      </div>
    );                           // //JSX java script component
  }

}





export default App;

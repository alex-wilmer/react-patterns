import React from 'react';
import ReactDOM from 'react-dom';
import * as Lessons from './Lessons';

let Lesson = Lessons[window];

let App = props => (
  <div>
    <h1>{props.title}</h1>
    <hr />
    <Lesson />
  </div>
);

let reactElement = <App title="React Patterns" />;
let domElement = document.getElementById('root');

ReactDOM.render(reactElement, domElement);

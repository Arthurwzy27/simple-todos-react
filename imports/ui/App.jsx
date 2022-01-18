import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import Task from './components/Task';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <Task />
  </div>
);

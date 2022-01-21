import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import './css/TaskForm.css';
import TextField from '@mui/material/TextField';


export const TaskForm = ({ user }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    Meteor.call('tasks.insert', text);

    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        data-cy="new-todo"
        label="What needs to be done?"
        variant="standard"
        value={text}
        autoComplete="off"
        onChange={(e) => setText(e.target.value)}
        />
      <button type="submit" data-cy="submit">Add Task</button>
    </form>
  );
};

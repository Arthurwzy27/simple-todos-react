import React, { useState } from 'react';
import { TasksCollection } from '/imports/api/TasksCollection';
import './TaskForm.css';
import TextField from '@mui/material/TextField';


export const TaskForm = ({ user }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    TasksCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
      userId: user._id
    });

    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* <TextField
        id="standard-basic"
        label="Type to add new tasks"
        variant="standard"
        value={text}
        onChange={(e) => setText(e.target.value)}
        /> */}

      <button type="submit">Add Task</button>
    </form>
  );
};

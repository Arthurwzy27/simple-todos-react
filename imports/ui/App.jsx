import React from 'react';
import { Task } from './components/Task.jsx';
import { TasksCollection } from '/imports/api/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { TaskForm } from './components/TaskForm.jsx';


export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <TaskForm/>
      
      <ul>
        { tasks.map(task =>
          <Task key={ task._id } task={ task }/>)
        }
      </ul>
    </div>
  )
};

export default App;

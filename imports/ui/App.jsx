import React from 'react';
import { Task } from './components/Task.jsx';
import { TasksCollection } from '/imports/api/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { TaskForm } from './components/TaskForm.jsx';


export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  const toggleChecked = ({ _id, isChecked }) => {
    TasksCollection.update(_id, {
      $set: {
        isChecked: !isChecked
      }
    })
  };

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <TaskForm/>

      <ul>
        { tasks.map(task =>
          <Task key={ task._id } task={ task } onCheckboxClick={toggleChecked} />)
        }
      </ul>
    </div>
  )
};

export default App;

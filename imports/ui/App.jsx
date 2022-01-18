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

  const deleteTask = ({ _id }) => TasksCollection.remove(_id)

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>My Tasks</h1>
          </div>
        </div>
      </header>

      <div className="main">
        <TaskForm/>
        <ul className="tasks">
          { tasks.map(task =>
            <Task
              key={ task._id }
              task={ task }
              onCheckboxClick={toggleChecked}
              onDeleteClick={deleteTask}
            />
            )
          }
        </ul>
      </div>
    </div>
  )
};

export default App;

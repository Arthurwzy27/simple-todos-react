import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { Task } from './components/Task.jsx';
import { TasksCollection } from '/imports/api/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { TaskForm } from './components/TaskForm.jsx';
import { LoginForm } from './components/LoginForm.jsx';

const toggleChecked = ({ _id, isChecked }) =>
  Meteor.call('tasks.setIsChecked', _id, !isChecked);

  const deleteTask = ({ _id }) => Meteor.call('tasks.remove', _id);

export const App = () => {
  const user = useTracker(() => Meteor.user());

  const [hideCompleted, setHideCompleted] = useState(false);

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const userFilter = user ? { userId: user._id } : {};

  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  const tasks = useTracker(() => {
    if (!user) {
      return [];
    }

    return TasksCollection.find(
      hideCompleted ? pendingOnlyFilter : userFilter,
      {
        sort: { createdAt: -1 },
      }
      ).fetch();
    });

  const pendingTasksCount = useTracker(() => {
    if (!user) {
      return 0;
    }

    return TasksCollection.find(pendingOnlyFilter).count();
  });

  const pendingTasksTitle = `${
    pendingTasksCount ? ` (${pendingTasksCount})` : ''
  }`;

  const logout = () => Meteor.logout();

  return (
    <div className="app">
      <div className="main">
        <header>
          <div className="app-bar">
            <div className="app-header">
              <h1>Today's Tasks {pendingTasksTitle}</h1>
            </div>
          </div>
        </header>

        {user ? (
          <Fragment>
            <div className="user" onClick={logout}>
              {user.username} 🚪
            </div>

            <TaskForm user={user} />

            <div className="filter">
              <button onClick={() => setHideCompleted(!hideCompleted)}>
                {hideCompleted ? 'Show All' : 'Hide Completed'}
              </button>
            </div>

            <ul className="tasks">
              { tasks.map(task => (
                <Task
                  key={ task._id }
                  task={ task }
                  onCheckboxClick={toggleChecked}
                  onDeleteClick={deleteTask}
                />
              ))}
            </ul>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};

export default App;

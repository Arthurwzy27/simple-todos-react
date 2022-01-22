import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { Task } from './components/Task.jsx';
import { TasksCollection } from '/imports/db/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { TaskForm } from './components/TaskForm.jsx';
import { LoginForm } from './components/LoginForm.jsx';
import Avatar from '@mui/material/Avatar';

const toggleChecked = ({ _id, isChecked }) =>
  Meteor.call('tasks.setIsChecked', _id, !isChecked);

  const deleteTask = ({ _id }) => Meteor.call('tasks.remove', _id);

export const App = () => {
  const user = useTracker(() => Meteor.user());

  const [hideCompleted, setHideCompleted] = useState(false);

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const userFilter = user ? { userId: user._id } : {};

  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  const { tasks, pendingTasksCount, isLoading } = useTracker(() => {
    const noDataAvailable = { tasks: [], pendingTasksCount: 0 };
    if (!Meteor.user()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe('tasks');

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const tasks = TasksCollection.find(
      hideCompleted ? pendingOnlyFilter : userFilter,
      {
        sort: { createdAt: -1 },
      }
    ).fetch();
    const pendingTasksCount = TasksCollection.find(pendingOnlyFilter).count();

    return { tasks, pendingTasksCount };
  });

  const pendingTasksTitle = `${
    pendingTasksCount ? ` (${pendingTasksCount})` : ''
  }`;

  const logout = () => Meteor.logout();

  return (
    <div className="app">
      <div className="main">
          <div className="user" onClick={logout}>
            <Avatar className="user-avatar" alt="Arthur Picard" src="#" color="#red" />
            <p>Log out</p>
            {/* {user.username} 🚪 */}
          </div>
        <header>
          <div className="app-bar">
            <div className="app-header">
              <h1>Today's Tasks {pendingTasksTitle}</h1>
            </div>
          </div>
        </header>

        {user ? (
          <Fragment>
            <TaskForm user={user} />

            {isLoading && <div className="loading">loading...</div>}
            <div className="primary">
              <div className="filter">
                <button
                  onClick={() => setHideCompleted(!hideCompleted)}
                  data-cy="filter-button">
                    {hideCompleted ? 'Show All' : 'Hide Completed'}
                </button>
              </div>
              <ul className="tasks">
                { tasks.map(task => (
                  <Task
                    key={task._id}
                    task={task}
                    onCheckboxClick={toggleChecked}
                    onDeleteClick={deleteTask}
                  />
                ))}
              </ul>
            </div>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};

export default App;

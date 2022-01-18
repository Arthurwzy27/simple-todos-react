import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Accounts } from 'meteor/accounts-base';

// Creating User account:
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
});

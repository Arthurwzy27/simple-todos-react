import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import './css/LoginForm.css';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={submit} className="login-form">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="username"
          id="login-username"
          data-test="username"
          required
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
          id="login-password"
          data-test="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="submit" data-cy="login-submit">Log In</button>
      </div>
    </form>
  );
};

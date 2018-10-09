import React from 'react';
import logo from './logo.svg';

export const Header = (props) => {
  console.log(props);
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hola</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.children}
          </a>
        </header>
    )
}

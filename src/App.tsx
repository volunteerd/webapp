import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { createDatabase, readDatabase } from './script';

export default function App () {
    return (
          <div>
            Hi
            <button onClick={() => createDatabase()}>Write</button>
            <button onClick={() => readDatabase()}>Read</button>
          </div>
    )
}
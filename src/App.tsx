import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { touchDatabase } from './script';

export default function App () {
    return (
        <BrowserRouter>
          <div>
            Hi
            <button onClick={() => touchDatabase()}>Send</button>
          </div>
        </BrowserRouter>
    )
}
import React from 'react';
import { Bordered } from '../shared';
import Authority from './authority';

import './index.scss';

const App = () => (
  <div className="App">
    <Bordered position="bottom">
      <header className="App-header">
        <span className="text text-md">Authority Document Card</span>
      </header>
    </Bordered>

    <Authority />
  </div>
);

export default App;

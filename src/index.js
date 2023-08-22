/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  Dropdown,
} from 'semantic-ui-react';

const root = ReactDOM.createRoot(
  document.getElementById('app'),
);

root.render(
  <div>
    <span>
      this works in development mode but not in production
    </span>
    <Dropdown />
  </div>,
);

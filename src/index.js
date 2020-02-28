import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import AppWorlds from './helloworlds/AppWorlds';

ReactDOM.render(
  <BrowserRouter>
    <AppWorlds />
  </BrowserRouter>,
  document.getElementById('root')
);
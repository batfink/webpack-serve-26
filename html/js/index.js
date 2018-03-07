import React from "react";
import {render} from 'react-dom';
import App from './App';

// The DOM element that will host our React application
const root = document.createElement('div');
if (document.body) document.body.appendChild(root);

render(<App />, root);

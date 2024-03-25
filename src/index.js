import React from 'react';
import ReactDOM from 'react-dom/client';

import 'what-input/dist/what-input.min'
import 'foundation-sites/dist/js/foundation.min'
import './custom-style/scss/animation.scss'

import './index.css';
import reportWebVitals from './reportWebVitals';

import RouterConfig from './components/router/RouterConfig'
import {RouterProvider} from "react-router-dom";
import { hydrate, render } from "react-dom";

/*
const root = document.getElementById('root');

if (root.hasChildNodes()) {
      hydrate(<RouterProvider router={RouterConfig}></RouterProvider>, root);
  } else {
      render(<RouterProvider router={RouterConfig}></RouterProvider>, root);
  }*/

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
        <RouterProvider router={RouterConfig}></RouterProvider>
  );
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

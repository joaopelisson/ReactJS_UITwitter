import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';
import { TweetsMocks  } from './mocks/mocksDatas';
import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Separator } from './components/Separetor';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

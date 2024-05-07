import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router/Router';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>,
);
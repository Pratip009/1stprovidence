// src/lazyApp.js
import { lazy } from 'react';
export default lazy(() => import('./App.jsx'));

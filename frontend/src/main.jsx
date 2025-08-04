import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import TuitionScreen from './screens/TutionScreen.jsx'
import ProgramScreen from './screens/ProgramScreen.jsx';
import ResourceScreen from './screens/ResourceScreen.jsx';
import CourseScheduleScreen from './screens/CourseScheduleScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import BlogScreen from './screens/BlogScreen.jsx';
import GalleryScreen from './screens/GalleryScreen.jsx';
import BlogDetails from './screens/BlogDetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/programs' element={<ProgramScreen />} />
      <Route path='/tuition' element={<TuitionScreen />} />
      <Route path='/resources' element={<ResourceScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/schedule' element={<CourseScheduleScreen />} />
      <Route path='/contact' element={<ContactScreen />} />
      <Route path='/blog' element={<BlogScreen />} />
      <Route path='/blog/:id' element={<BlogDetails />} />
      <Route path='/gallery' element={<GalleryScreen />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

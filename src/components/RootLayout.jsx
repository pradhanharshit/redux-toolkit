import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import store from '../store/store';

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
      <NavBar />
      <Outlet />
      </Provider>
    </>
  )
}

export default RootLayout

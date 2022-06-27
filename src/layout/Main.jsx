import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;

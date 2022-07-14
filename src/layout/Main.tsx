import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from '../components/';

const Main: React.FC = () => {
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

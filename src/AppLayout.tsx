import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/event">Event</Link>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default AppLayout;

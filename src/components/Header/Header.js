import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/rgb/219/128/143" className="color">
        {' '}
        Slightly Lighter Pink{' '}
      </NavLink>
      <NavLink to="/rgb/219/128/144" className="color">
        {' '}
        Pink{' '}
      </NavLink>
      <NavLink to="/rgb/219/128/145" className="color">
        {' '}
        Slightly Darker Pink{' '}
      </NavLink>
      <NavLink to="/rgb/219/160/160" className="color">
        {' '}
        Ugly Pink{' '}
      </NavLink>
      <NavLink to="/rgb/228/17/77" className="color">
        {' '}
        Hot Pink{' '}
      </NavLink>
    </header>
  );
}

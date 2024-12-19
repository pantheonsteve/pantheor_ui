import React from 'react';
import NavItem from './NavItem';

const StickySidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3 position-fixed"
      style={{
        width: '280px',
        height: '100vh',
        top: 0,
        left: 0,
      }}
    >
      {/* Sidebar Header */}
      <a
        href="/"
        className="d-flex align-items-center mb-3 text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Pantheor Copilot</span>
      </a>
      <hr />

      {/* Navigation Links */}
      <ul className="nav flex-column">
        <NavItem label="Home" href="/"/>
        <NavItem label="Chat with Pantheor AI"href="/chat"/>
        <NavItem label="Gong Call Summary" href="/gong"/>
      </ul>
      <hr />

      {/* Footer Links */}
    </div>
  );
};

export default StickySidebar;

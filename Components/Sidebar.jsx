import React from 'react';
import './Sidebar.css';

function Sidebar({onClick}) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onClick('Bebidas')}>Bebidas</li>
        <li onClick={() => onClick('Doces')}>Doces</li>
        <li onClick={() => onClick('Frutas')}>Frutas</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
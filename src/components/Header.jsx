import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '10px 0' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px' }}>Recipe Management</h1>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/recipes" style={{ color: '#fff', textDecoration: 'none' }}>Recipes</Link></li>
          <li><Link to="/add-recipe" style={{ color: '#fff', textDecoration: 'none' }}>Add Recipe</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

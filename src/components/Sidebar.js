import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onOptionClick }) => {
  const options = [
    'Dashboard',
    'Inventory',
    'Order',
    'Returns',
    'Customers',
    'Shipping',
    'Channel',
    'Integrations',
    'Calculators',
    'Reports',
    'Account',
  ];

  return (
    <div className="sidebar">
      <ul>
        {options.map((option) => (
          <li
            key={option}
            onClick={() => onOptionClick(option)}
            className={option === 'Dashboard' ? 'active' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

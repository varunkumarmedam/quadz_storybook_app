import React from 'react';
import PropTypes from 'prop-types';
import './NavigationRail.css';
import * as Icons from 'react-icons/fa'; // Import all icons from a specific set (e.g., Font Awesome)
import { useState } from 'react';
/**
 * Primary UI component for user interaction
 */
export const NavigationRail = ({ backgroundColor, tabs }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (!showLabels)
      setTimeout(() => setShowLabels(!showLabels), 100)
    else
      setShowLabels(!showLabels)
  };

  return (
    <div>
      <div className={[isDrawerOpen ? 'navigation-rail open' : 'navigation-rail']} style={backgroundColor && { backgroundColor }}>
        <Icons.FaBars className='menu-icon' onClick={toggleDrawer} />
        <div>
          {tabs.map((tab) => {
            return <div className='tab-contents d-flex'>
              <Icons.FaDotCircle />
              <div style={{ display: showLabels ? 'block' : 'none', fontSize:'16px' }}>{tab.label}</div>
            </div>
          })}</div>
      </div>
    </div>
  );
};

NavigationRail.propTypes = {
  backgroundColor: PropTypes.string,
  sections: Array
};

NavigationRail.defaultProps = {
  backgroundColor: 'grey',
  tabs: [
    {
      icon: "Home",
      label: "Module 1",
    },
    {
      icon: "Home",
      label: "Module 1",
    },
    {
      icon: "Home",
      label: "Module 1",
    },
    {
      icon: "Home",
      label: "Module 1",
    },
  ]
};

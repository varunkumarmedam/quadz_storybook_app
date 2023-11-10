import React from 'react';
import PropTypes from 'prop-types';
import './NavigationRail.css';
import * as Icons from 'react-icons/fa'; // Import all icons from a specific set (e.g., Font Awesome)
import { useState } from 'react';
/**
 * Primary UI component for user interaction
 */
export const NavigationRail = ({ backgroundColor, labelColor, activeLabelColor, activeLabelBackgroundColor, tabs }) => {
  const [tabsList, setTabsList] = useState(tabs);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (!showLabels)
      setTimeout(() => setShowLabels(!showLabels), 100)
    else
      setShowLabels(!showLabels)
  };

  const handleTabSelect = (i) => {
    const btns = tabsList.map((btn, index) => {
      if (index == i)
        btn.isActive = true;
      else
        btn.isActive = false;
      return btn;
    });
    setTabsList(btns);
  }

  return (
    <div className={[isDrawerOpen ? 'navigation-rail open' : 'navigation-rail']} style={{ backgroundColor: backgroundColor, color: labelColor }}>
      <Icons.FaBars className='menu-icon' onClick={toggleDrawer} />
      <div>
        {tabsList.map((tab, index) => {
          return <div className='tab-contents d-flex' style={{ backgroundColor: tab.isActive && activeLabelBackgroundColor, color: tab.isActive && activeLabelColor }} onClick={() => handleTabSelect(index)}>
            <Icons.FaDotCircle />
            <div style={{ display: showLabels ? 'block' : 'none', fontSize: '16px', marginLeft: '10px' }}>{tab.label}</div>
          </div>
        })}</div>
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
      isActive: true,
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

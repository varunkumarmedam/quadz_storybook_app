import React from 'react';
import PropTypes from 'prop-types';
import './NavigationRail.css';
import * as Icons from 'react-icons/fa'; // Import all icons from a specific set (e.g., Font Awesome)
import { useState } from 'react';
/**
 * Primary UI component for user interaction
 */
export const NavigationRail = ({ backgroundColor, tabs }) => {
  return (
    <div>
      <div className='navigation-rail' style={backgroundColor && {backgroundColor}}>
        <div><Icons.FaBars /></div>
        <div>
          {tabs.map((tab) => {
            return <div>
              {tab.icon}
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

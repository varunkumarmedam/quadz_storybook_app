import React from 'react';
import PropTypes from 'prop-types';
import './NavigationDrawer.css';
import * as Icons from 'react-icons/fa'; // Import all icons from a specific set (e.g., Font Awesome)
import { useState } from 'react';
/**
 * Primary UI component for user interaction
 */
export const NavigationDrawer = ({ title, backgroundColor, activeLabelBackgroundColor, activeLabelColor, labelColor, closeDrawerOnSelect, closeDrawerOnOverlayClick, sections }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sectionsList, setSectionsList] = useState(sections);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const updateActiveModule = (si, mi) => {
    const newSections = [];
    for (let index = 0; index < sectionsList.length; index++) {
      const currentSection = sectionsList[index];
      newSections.push({
        ...currentSection,
        child: currentSection.child.map((currentModule, cmi) => {
          if (currentModule.isActive == true)
            delete currentModule.isActive;
          if (si == index && mi == cmi)
            currentModule.isActive = true;
          return currentModule;
        })
      })
    }
    setSectionsList(newSections);
    if (closeDrawerOnSelect)
      setTimeout(() => setIsDrawerOpen(false), 500);
  }

  return (
    <div className={[isDrawerOpen ? 'navigation-drawer-bg' : '']} onClick={() => {
      if (closeDrawerOnOverlayClick) toggleDrawer();
    }} >
      <button className='drawer-btn' onClick={toggleDrawer}><Icons.FaBars /></button>
      <div className={[isDrawerOpen ? 'navigation-drawer open' : 'navigation-drawer']} style={backgroundColor && { backgroundColor }} onClick={(evnt) => evnt.stopPropagation()}>
        <div className='drawer-content'>
          <div className='d-flex justify-between'>
            <div className='title'>{title}</div>
            <Icons.FaTimes style={{ color: labelColor }} onClick={toggleDrawer} />
          </div>
          {sectionsList.map((section, si) => {
            return <div className='section'>
              <p>{section.header}</p>
              {section.child.map((module, mi) => {
                return <button
                  onClick={() =>
                    updateActiveModule(si, mi)
                  }
                  className='d-flex justify-between module' style={{
                    backgroundColor: module.isActive && activeLabelBackgroundColor,
                    color: module.isActive ? activeLabelColor : labelColor
                  }}>
                  <div className='d-flex'>
                    <div className='module-icon mr-2'>{module.icon}</div>
                    <div className='module-label'>{module.label}</div>
                  </div>
                  <div className='module-append-text'>{module?.appendText}</div>
                </button>
              })}
            </div>
          })}
        </div>
      </div>
    </div >
  );
};

NavigationDrawer.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  labelColor: PropTypes.string,
  activeLabelColor: PropTypes.string,
  activeLabelBackgroundColor: PropTypes.string,
  closeDrawerOnSelect: PropTypes.bool,
  closeDrawerOnOverlayClick: PropTypes.bool,
  sections: Array
};

NavigationDrawer.defaultProps = {
  backgroundColor: 'grey',
  closeDrawerOnSelect: true,
  closeDrawerOnOverlayClick: true,
  sections: [
    {
      header: "Section 1",
      child: [
        {
          isActive: true,
          icon: "Home",
          label: "Module 1",
          appendText: "100+"
        },
        {
          icon: "Home",
          label: "Module 2",
          appendText: "New"
        }
      ]
    },
    {
      header: "Section 2",
      child: [
        {
          icon: "Icon",
          label: "Module 1",
          appendText: "100+"
        },
        {
          icon: "Icon",
          label: "Module 2",
        }
      ]
    }
  ]
};

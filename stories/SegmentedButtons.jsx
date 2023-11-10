import React from 'react';
import PropTypes from 'prop-types';
import './SegmentedButtons.css';
import * as Icons from 'react-icons/fa'; // Import all icons from a specific set (e.g., Font Awesome)
import { useState } from 'react';
/**
 * Primary UI component for user interaction
 */
export const SegmentedButtons = ({ backgroundColor, tabColor, activeTabColor, activeTabBackgroundColor, tabs, activeTab }) => {
  const [tabsList, setTabsList] = useState(tabs);
  const [activeTabNumber, setActiveTabNumber] = useState(activeTab);

  return (
    <div className='segmented-btns-tab'>
      {tabsList.map((tab, index) => {
        return <button className={[index == 0 ? 'tab-first' : 'tab-mid', index == tabsList.length - 1 && 'tab-last', 'segmented-btn'].join(" ")}
          style={{ backgroundColor: index == activeTabNumber ? activeTabBackgroundColor : backgroundColor, color: index == activeTabNumber ? activeTabColor : tabColor }}
          onClick={() => setActiveTabNumber(index)}>
          {index == activeTabNumber && <Icons.FaCheck className='mr-3'/>}
          {tab}
        </button>
      })}
    </div>
  );
};

SegmentedButtons.propTypes = {
  backgroundColor: PropTypes.string,
  sections: Array
};

SegmentedButtons.defaultProps = {
  backgroundColor: 'grey',
  tabs: ['Label 1', "Label 2", "Label 3", "Label 4"]
};

import React from 'react';
import PropTypes from 'prop-types';
import './BottomNavBar.css';
import * as Icons from 'react-icons/fa'; // Import all icons from a specific set (e.g., Font Awesome)
import { useState } from 'react';
/**
 * Primary UI component for user interaction
 */
export const BottomNavBar = ({ backgroundColor, iconColor, labelColor, activeIconColor, activeIconBackgroundColor, showLabelsOnTop, buttons }) => {
  const [navButtons, setNavButtons] = useState(buttons);

  return (
    <div className='row nav-bar' style={backgroundColor && { backgroundColor }}>
      {navButtons.map((button, i) => {
        return <button
          disabled={button.isDisabled}
          style={{ opacity: button.isDisabled ? 0.5 : '' }}
          type="button"
          className='nav-btn'
          onClick={() => {
            button.onClick();
            const btns = navButtons.map((btn, index) => {
              if (index == i)
                btn.isActive = true;
              else
                btn.isActive = false;
              return btn;
            });
            setNavButtons(btns);
          }}
        >

          {/* Button tooltip */}
          {button.tooltip &&
            <div className='nav-btn-tooltip'>
              {button.tooltip?.type == 'number' ? <div className='nav-btn-tooltip--count'>{button.tooltip?.count}</div> : ""}
            </div>
          }

          {/* Button label */}
          {showLabelsOnTop == true && <div style={{ color: labelColor }}>{button.label}</div>}

          {/* Button icon */}
          <div className='nav-btn-icon' style={{ color: button.isActive ? activeIconColor : iconColor, background: button.isActive ? activeIconBackgroundColor : '' }}><Icons.FaHome /></div>

          {/* Button label */}
          {showLabelsOnTop != true && <div style={{ color: labelColor }}>{button.label}</div>}
        </button>
      })}

    </div>

  );
};

BottomNavBar.propTypes = {
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
  labelColor: PropTypes.string,
  activeIconColor: PropTypes.string,
  activeIconBackgroundColor: PropTypes.string,
  showLabelsOnTop: PropTypes.bool,
  buttons: Array
};

BottomNavBar.defaultProps = {
  backgroundColor: 'grey',
  showLabelsOnTop: false,
  buttons: [
    {
      isActive: true,
      icon: 'home',
      label: "Home",
      onClick: () => { console.log("Home btn clkd") }
    },
    {
      isActive: false,
      tooltip: {
        type: 'dot'
      },
      icon: 'card',
      label: "Cards",
      onClick: () => { console.log("Home btn clkd") }
    },
    {
      isActive: false,
      tooltip: {
        type: 'number',
        count: 1
      },
      icon: 'settings',
      label: "Settings",
      onClick: () => { console.log("Home btn clkd") }
    },
    {
      isActive: false,
      isDisabled: true,
      tooltip: {
        type: 'number',
        count: 1
      },
      icon: 'settings',
      label: "Settings",
      onClick: () => { console.log("Home btn clkd") }
    },
  ]
};

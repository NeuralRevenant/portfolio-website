import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faRobot,
  faHelicopter,
  faComputer,
  faMobile,
  faHeadphones,
  faPlane,
  faMicrochip,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import './FloatingObject.scss';

const FloatingObject = ({ hide }) => {
  const icons = useMemo(
    () => [
      { icon: faLaptopCode,  size: 'medium', speed: 'slow',   delay: 0,  color: '#38b6ff' },
      { icon: faRobot,       size: 'small',  speed: 'medium', delay: 2,  color: '#ff6b6b' },
      { icon: faHelicopter,  size: 'small',  speed: 'fast',   delay: 4,  color: '#4ecdc4' },
      { icon: faComputer,    size: 'medium', speed: 'slow',   delay: 6,  color: '#96ceb4' },
      { icon: faMobile,      size: 'small',  speed: 'fast',   delay: 8,  color: '#ffeaa7' },
      { icon: faHeadphones,  size: 'small',  speed: 'medium', delay: 10, color: '#98d8c8' },
      { icon: faPlane,       size: 'medium', speed: 'slow',   delay: 12, color: '#74b9ff' },
      { icon: faMicrochip,   size: 'small',  speed: 'fast',   delay: 14, color: '#fdcb6e' },
    ],
    []
  );

  // Temporarily disable hide to ensure visibility
  // if (hide) return null;

  return (
    <div className="floating-objects">
      {/* Debug indicator */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'red',
        color: 'white',
        padding: '5px',
        zIndex: 9999,
        fontSize: '12px'
      }}>
        FloatingObjects: {icons.length} icons
      </div>
      
      {/* Static test icon */}
      <FontAwesomeIcon
        icon={faRocket}
        style={{
          position: 'fixed',
          top: '50px',
          right: '10px',
          fontSize: '2rem',
          color: '#ff0000',
          zIndex: 9999
        }}
      />
      
      {icons.map(({ icon, size, speed, delay, color }, i) => (
        <FontAwesomeIcon
          key={i}
          icon={icon}
          className={`float ${size} ${speed} ${i % 2 ? 'reverse' : ''} ${!(i % 3) ? 'wave' : ''}`}
          style={{ 
            animationDelay: `${delay}s`, 
            color
          }}
        />
      ))}
    </div>
  );
};

export default FloatingObject; 
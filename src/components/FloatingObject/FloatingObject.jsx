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

const FloatingObject = () => {
  const icons = useMemo(
    () => [
      { icon: faLaptopCode,  size: 'large', speed: 'slow',   delay: 0,  color: '#38b6ff' },
      { icon: faRocket,  size: 'large', speed: 'fast',   delay: 1,  color: '#fdcb6e' },
      { icon: faMicrochip,   size: 'large',  speed: 'medium',   delay: 1, color: '#3fb6ff' },
      { icon: faRobot,       size: 'large',  speed: 'medium', delay: 2,  color: '#ff6b6b' },
      { icon: faHelicopter,  size: 'large',  speed: 'fast',   delay: 3,  color: '#4ecdc4' },
      { icon: faComputer,    size: 'large', speed: 'slow',   delay: 3,  color: '#96ceb4' },
      { icon: faMobile,      size: 'large',  speed: 'fast',   delay: 3,  color: '#ffeaa7' },
      { icon: faHeadphones,  size: 'large',  speed: 'medium', delay: 3, color: '#98d8c8' },
      { icon: faPlane,       size: 'large', speed: 'slow',   delay: 3, color: '#74b9ff' },
      { icon: faMicrochip,   size: 'large',  speed: 'fast',   delay: 3, color: '#fdcb6e' },
      { icon: faPlane,       size: 'large', speed: 'slow',   delay: 3, color: '#74b9ff' },
      { icon: faHeadphones,  size: 'large',  speed: 'medium', delay: 3, color: '#98d8c8' },
      { icon: faHelicopter,  size: 'large',  speed: 'fast',   delay: 3,  color: '#4ecdc4' },
    ],
    []
  );

  return (
    <div className="floating-objects">
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
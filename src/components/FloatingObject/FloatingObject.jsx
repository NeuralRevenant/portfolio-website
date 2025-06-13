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

  if (hide) return null;

  return (
    <div className="floating-objects">
      {icons.map(({ icon, size, speed, delay, color }, i) => (
        <FontAwesomeIcon
          key={i}
          icon={icon}
          className={`float ${size} ${speed} ${i % 2 ? 'reverse' : ''} ${!(i % 3) ? 'wave' : ''}`}
          style={{ animationDelay: `${delay}s`, color }}
        />
      ))}
    </div>
  );
};

export default FloatingObject; 
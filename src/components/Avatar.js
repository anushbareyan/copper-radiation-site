import React from 'react';
import './Avatar.css';
import defaultAvatar from '../assets/sat.jpg';

const Avatar = ({ imageSrc }) => {
  return (
    <div className="avatar">
      <img src={imageSrc || defaultAvatar} alt="Project Avatar" />
    </div>
  );
};

export default Avatar;

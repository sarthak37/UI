import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="label">MARKETPLACE</div>
        <p style={{ color: 'green', fontSize: 50, paddingTop: '20px'}}>Email Templates</p>
        <p style={{  fontSize: 50 , paddingBottom: '20px'}}>by the community, for the community.</p>
        <p>100s of free templates to help you craft the perfect marketing journey.</p>
      </div>
    </div>
  );
};

export default Banner;

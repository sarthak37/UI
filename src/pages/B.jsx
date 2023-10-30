import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="label">MARKETPLACE</div>
        <div className="sliding-text">
          <p style={{ color: 'green', fontSize: '6vh', fontweight: 'bold', paddingTop: '20px'}}>Email Templates</p>
          <p style={{ color: 'green', fontSize: '6vh', fontweight: 'bold',paddingTop: '20px'}}>Email Sequences</p>
          <p style={{ color: 'green', fontSize: '6vh',fontweight: 'bold', paddingTop: '20px'}}>Marketing Recipes</p>
        </div>
        <p style={{  fontSize: '6vh' , paddingBottom: '20px', fontweight: 'bold'}}>by the community, for the community.</p>
        <p style={{  fontSize: '3vh' }}>100s of free templates to help you craft the perfect marketing journey.</p>
      </div>
    </div>
  );
};

export default Banner;

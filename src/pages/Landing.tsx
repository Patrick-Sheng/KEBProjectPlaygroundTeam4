import React from 'react';
import landingBg from '../assets/images/LandingPage.png';

const Landing: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${landingBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: '100% auto',   // full width, auto height
        minHeight: '175vh',
        padding: '2rem',
        color: 'white',
        backgroundColor: '#000',       // fallback background color
        }}
      >
        {/* Your content */}
    </div>
  );
};


export default Landing;

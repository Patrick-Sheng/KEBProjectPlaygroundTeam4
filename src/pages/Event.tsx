import React from 'react';
import eventsBg from '../assets/images/Events.png';

const Event: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${eventsBg})`,
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
}

export default Event;
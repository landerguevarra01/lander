import React from 'react';
import './Contact.css'; // Import your CSS file for styling

const HorizontalScroll = () => {
  return (
    <div className="container">
      <div className="horizontal-scrolling-items">
        <div className="horizontal-scrolling-items__item">
          Here is some horizontally scrolling text used for a tutorial. It will loop smoothly.&nbsp;
        </div>
        <div className="horizontal-scrolling-items__item">
          Here is some horizontally scrolling text used for a tutorial. It will loop smoothly.&nbsp;
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

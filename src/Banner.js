// Banner.js

import React from 'react';

function Banner() {
    const bannerStyle = {
        backgroundColor: '#007bff', // Change the background color to your preference
        color: '#fff', // Change the text color to your preference
        padding: '10px 0', // Add padding for spacing
        textAlign: 'center', // Center align the text
      };
    
      const titleStyle = {
        fontSize: '24px', // Adjust the font size as needed
        margin: '0', // Remove default margin
      };
    
      return (
        <div style={bannerStyle}>
          <h1 style={titleStyle}>Sextant</h1>
        </div>
      );
}

export default Banner;

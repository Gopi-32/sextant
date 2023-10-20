// IPComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IPComponent({ ipAddressType }) {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    // Define the API URL based on the ipAddressType prop
    const apiUrl = ipAddressType === 'ipv4' ? 'https://api64.ipify.org?format=json' : 'https://api.ipify.org?format=json';

    // Make an HTTP request to the ipify API
    axios.get(apiUrl)
      .then(response => {
        setIpAddress(response.data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, [ipAddressType]);

  return (
    <div className="ip-component">
      <h2>Public {ipAddressType.toUpperCase()} Address:</h2>
      <p>{ipAddress}</p>
    </div>
  );
}

export default IPComponent;

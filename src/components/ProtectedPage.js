import React, { useEffect } from 'react';

const ProtectedPage = () => {
  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        const response = await fetch('/');

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        console.log(data); // This will log the response from the protected endpoint
      } catch (error) {
        // Handle errors, including redirection
        if (error.message === 'Unauthorized') {
          window.location.href = '/';
        } else if (error.message === 'Login required') {
          console.log('Login required');
        } else {
          console.error(error.message);
        }
      }
    };

    handleAuthentication();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default ProtectedPage;
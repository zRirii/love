import React from 'react';
import { useAuth } from './AuthContext'; // Adjust the import path

const RequireSignIn = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // If user is not signed in, render a message or a sign-in component
    return (
      <div>
        <p>Please sign in to access this page.</p>
        {/* Add your sign-in component or link here */}
      </div>
    );
  }

  // If user is signed in, render the children (content of the protected route)
  return <>{children}</>;
};

export default RequireSignIn;

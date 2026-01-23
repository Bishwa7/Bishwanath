import React from 'react';
// Assuming the video is imported if it's in the src folder:
import backgroundVideo from '/bgweb.mp4';

const Background = () => {
  return (
    <div className="w-full min-h-screen fixed inset-0 -z-10 overflow-hidden">
      <video preload='auto' autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
        {/* Use the imported variable if from src; else, use the public path */}
        <source src={backgroundVideo} type="video/mp4" /> 
        {/* Optional: Add a fallback message for browsers that don't support video tags */}
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute inset-0 bg-black/50" /> */}
      
    </div>
  );
};

export default Background;

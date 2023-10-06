import React from 'react';

const Features = () => {

  const message = "Access to Karafun's song catalog is required to play this game!"

  return (
      <div className="features">
        <h2>How do I Skaryoke?</h2>
        <div>
          <div>
            <h3>Link your Karafun Account</h3>
            <p>{message}</p>
            <a href="https://www.karaoke-version.com/afflink.html?aff=77&action=redirect&song=Hang Up&artist=Madonna">Click here for Hang Up</a>
          </div>
          <div>
            <h3>Easy to Use</h3>
            <p>Our platform is user-friendly, so you can start singing in no time.</p>
          </div>
          <div>
            <h3>Community</h3>
            <p>Connect with other karaoke enthusiasts and have a blast.</p>
          </div>
        </div>
      </div>
  );
};

export default Features;
import React from 'react';
import '../styles/Profile.css';
import profile from '../assets/profile.png';
import camera from '../assets/camera.png'; // Add camera icon image here

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">Account Settings</div>

        <div className="profile-main">
          <div className="profile-img-wrapper">
            <img src={profile} alt="Profile" className="profile-img" />
            <img src={camera} alt="Camera Icon" className="camera-icon" />
          </div>

          <div className="profile-info">
            <h4 className="profile-name">Marry Doe</h4>
            <p className="profile-email">Marry@gmail.com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
          nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>
    </div>
  );
};

export default Profile;

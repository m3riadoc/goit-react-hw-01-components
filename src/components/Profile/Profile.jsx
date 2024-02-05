import React from 'react';
import './Profile.css'; 

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt="User avatar" className="profile-avatar" />
      <div className="profile-info">
        <h1 className="profile-name">{username}</h1>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>
      <div className="profile-stats">
              <div className="stat">
                  <span className="stat-label">Followers</span>
          <span className="stat-number">{stats.followers}</span>
          
        </div>
              <div className="stat">
                  <span className="stat-label">Views</span>
          <span className="stat-number">{stats.views}</span>
        </div>
        <div className="stat">
        <span className="stat-label">Likes</span>
          <span className="stat-number">{stats.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
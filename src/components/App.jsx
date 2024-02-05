import React from 'react';
import Profile from './Profile'; 
import user from './user.json';
import Statistics from './Statistics';
import data from './data.json';
import FriendList from './FriendList';
import friends from './friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

    <Statistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />
    </div>
  );
};

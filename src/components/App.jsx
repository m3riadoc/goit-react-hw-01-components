import React from 'react';
import Profile from './Profile/Profile'; 
import user from './user.json';
import Statistics from './Statistic/Statistics';
import data from './data.json';
import FriendList from './Friends/FriendList';
import friends from './friends.json';
import Transactions from './Transactions/Transactions';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div
      style={{
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

    <Transactions transactions={transactions} />;
    </div>
  );
};

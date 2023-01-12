import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import User from '../data/user.json';
import Data from '../data/data.json';
import Friends from '../data/friends.json';
import Transactions from '../data/transactions.json';
const { username, tag, location, avatar, stats } = User;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={Data} />
      <Statistics stats={Data} />
      <FriendList friends={Friends} />
      <TransactionHistory items={Transactions} />
    </>
  );
};

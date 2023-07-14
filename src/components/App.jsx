import { Profile } from './profile/profile'
import { Statistics } from './statistics/statistics'
import { FriendsList } from './friendList/friendList'
import { TransactionHistory } from './transactionHistory/transactionHistory'
import user from './user.json'
import data from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'



export const App = () => {
  return (
    <div
      style={{
        padding: '30px 0px 30px 30px'
        
      }}
    >
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics stats={data} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions}/>
      
    </div>
  );
};

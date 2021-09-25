//источники данных
import user from './API/user.json';
import friends from './API/friends.json';
import statisticalData from './API/statistical-data.json';
import transactions from './API/transactions.json';

//компонямбы
import Container from 'components/Container/Container';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionsHistory from 'components/TransactionsHistory/TransactionsHistory';

import style from './App.css';


//сборка на експорт в индекс .жс
 export default function App() {
   return(
     <Container>
       <h2 className='mainTitle'>Profile</h2>
       <Profile
       name = {user.name}
       tag = {user.tag}
       location = {user.location}
       avatar = {user.avatar}
       stats = {user.stats}
       />

       <h2 className='mainTitle'>Statistics</h2>
       <Statistics title="Upload stats" stats={statisticalData} />

       <h2 className='mainTitle'>Friends</h2>
       <FriendList items={friends}/>

       <h2 className='mainTitle'>Transactions History</h2>
       <TransactionsHistory items={transactions}/>




     </Container>

   )
 
}



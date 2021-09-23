//источники данных
import user from './API/user.json';
import friends from './API/friends.json';
import statisticalData from './API/statistical-data.json';
import transactions from './API/transactions.json';

//компонямбы
import Container from 'components/Container/Container';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';


//сборка на експорт
 export default function App() {
   return(
     <Container>
       <h2>Profile</h2>
       <Profile
       name = {user.name}
       tag = {user.tag}
       location = {user.location}
       avatar = {user.avatar}
       stats = {user.stats}
       />

       <h2>Statistics</h2>
       <Statistics title="Upload stats" stats={statisticalData} />



     </Container>

   )
 
}



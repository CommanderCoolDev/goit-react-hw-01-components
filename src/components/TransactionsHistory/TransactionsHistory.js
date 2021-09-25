import PropTypes from 'prop-types';// типы пропов импорт почти везде где прописываем их
import style from 'components/TransactionsHistory/TransactionsHistory.module.css';//стиль наше все

export default function TransactionsHistory({items}) {//таблица (была дефолтной) + деструктуризация при мапе
    return(
        <table className={style.transactionHistory}>
  <thead className={style.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id, type, amount, currency}) =>(
        <tr key={id}>
        <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
        </tr>
      ))}
      
   
   
  </tbody>
</table>
    );
}
// типы пропычамб
TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
}
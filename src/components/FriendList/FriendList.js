import PropTypes from 'prop-types';// типы пропов импорт почти везде где прописываем их
import style from './FriendList.module.css';// стиль

import FriendItem from 'components/FriendItem/FriendItem';// импорт компонета пункт списка

export default function FriendList ({items}) {//сам список, сюда лепим как выглядят пункты

    return (
        <ul className={style.friendList}>
            {items.map(item => (
                <FriendItem 
                avatar={item.avatar} 
                name={item.name} 
                isOnline={item.isOnline} 
                key={item.id}
                />
            ))}
            
        </ul>

    )
}
//типы пропычей
FriendList.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),
};
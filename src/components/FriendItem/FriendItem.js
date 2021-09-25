import PropTypes from 'prop-types';// типы пропов импорт почти везде где прописываем их
import style from 'components/FriendItem/FriendItem.module.css';// стиль

export default function FriendItem(props) {//вставляем пропы в дефолтную разметку пункта списка(именно пункта) и делаем проверку на онлайн
    const{ avatar, name, isOnline} = props;
    return (
        <li className={style.item}>
            <span className={isOnline ? style.on : style.off}></span>
            <img className={style.avatar} src={avatar} alt="Friend_avatar" width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
}

//типы пропов
FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
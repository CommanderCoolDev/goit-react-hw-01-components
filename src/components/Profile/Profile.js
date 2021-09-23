import PropTypes from 'prop-types'; // типы пропов импорт почти везде где прописываем их
import style from 'components/Profile/Profile.module.css';// стиль

export default function Profile (props) {
    const {name, tag, location, avatar, stats} = props;//деструктуризация пропов
    return (//вставляем в дефолтную разметку классы и пропы
        <div className={style.profile}>
  <div className={style.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={style.avatar}
    />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.stats__items}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{stats.followers}</span>
    </li>
    <li className={style.stats__items}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{stats.views}</span>
    </li>
    <li className={style.stats__items}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}

//типы пропов
Profile.propTypes ={
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}
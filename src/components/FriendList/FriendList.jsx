import css from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  Friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;

import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { FrendlyListUl } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FrendlyListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </FrendlyListUl>
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

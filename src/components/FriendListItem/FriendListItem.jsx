import PropTypes from 'prop-types';
import {
  ListItem,
  StatusElem,
  Avatar,
  FriendName,
} from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <StatusElem status={isOnline}>{isOnline}</StatusElem>
      <Avatar src={avatar} alt="User avatar" width={48} />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendListItem;

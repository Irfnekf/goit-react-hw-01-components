import PropTypes from 'prop-types';
import {
  CardProfile,
  Description,
  AvatarProfile,
  ProfileName,
  ProfileTagLoc,
  ProfileStats,
  ProfileItems,
  ProfileLabel,
  ProfileQuantity,
} from './Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <CardProfile>
      <Description>
        <AvatarProfile src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTagLoc>{tag}</ProfileTagLoc>
        <ProfileTagLoc>{location}</ProfileTagLoc>
      </Description>

      <ProfileStats>
        <ProfileItems>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </ProfileItems>
        <ProfileItems>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{stats.views}</ProfileQuantity>
        </ProfileItems>
        <ProfileItems>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </ProfileItems>
      </ProfileStats>
    </CardProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;

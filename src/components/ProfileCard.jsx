import React from "react";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <h3 className="profile-card__username">{props.username}</h3>
      <ul className="profile-card__info list-unstyled">
        <li>Tweets({props.numberOfTweets})</li>
        <li>Following({props.numberOfFollowing})</li>
        <li>Followers({props.numberOfFollowers})</li>
      </ul>
    </div>
  );
}

export default ProfileCard;

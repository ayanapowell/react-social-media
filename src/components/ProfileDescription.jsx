import React from "react";

function ProfileDescription(props) {
  return (
    <div className="profile-description">
      <p>{props.description}</p>
    </div>
  );
}

export default ProfileDescription;

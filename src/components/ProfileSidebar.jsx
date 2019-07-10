import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileDescription from "./ProfileDescription";

function ProfileSidebar(props) {
  return (
    <div className="sidebar">
      <ProfileCard
        username="Ayana"
        numberOfTweets="122"
        numberOfFollowing="333"
        numberOfFollowers="445"
      />
      <ProfileDescription description="Ante hendrerit fringilla? Molestias beatae pariatur, quos maxime, fames phasellus, ipsum natoque, ut quasi. Mollit quisquam eiusmod voluptate magni incididunt. Scelerisque class turpis vehicula officiis! Laboris ultricies excepteur aspernatur phasellus! Reprehenderit vulputate temporibus expedita conubia occaecat, fusce." />
    </div>
  );
}

export default ProfileSidebar;

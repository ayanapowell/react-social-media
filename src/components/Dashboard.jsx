import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import Feed from "./Feed";
import Suggestions from "./Suggestions";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__sidebar-left">
        <ProfileSidebar />
      </div>
      <div className="dashboard__feed">
        <Feed />
      </div>
      <div className="dashboard__sidebar-right">
        <Suggestions
          title1="John Doe"
          title2="Ayana Powell"
          title3="Colby Hayden"
        />
      </div>
    </div>
  );
}

export default Dashboard;

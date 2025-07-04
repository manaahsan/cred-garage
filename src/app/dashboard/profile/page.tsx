"use client";
import React from "react";

// route-components
import UserProfileSummary from "@/components/shared/UserProfileSummary";

const Profile = () => {
  return (
    <div className="p-6">
      <h2 className="text-foreground text-lg font-bold mb-4">Profile</h2>
      <UserProfileSummary />
    </div>
  );
};

export default Profile;

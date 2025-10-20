import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => setIsFollowing(true);
  const handleUnfollow = () => setIsFollowing(false);

  return (
    <div>
      <h2>Profile Page for User ID: {id}</h2>
      {isFollowing ? (
        <button onClick={handleUnfollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollow}>Follow</button>
      )}
    </div>
  );
};

export default Profile;

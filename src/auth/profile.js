import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0 6px",
        }}
      >
        <img className="h-10 rounded-full" src={user.picture} alt={user.name} />
        <div style={{ margin: 0 }}>
          <h2 className="font-bold " style={{ margin: 0 }}>
            {user.name}
          </h2>
        </div>
      </div>
    )
  );
};

export default Profile;

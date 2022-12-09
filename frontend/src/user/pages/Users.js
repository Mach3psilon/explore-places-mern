import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Eray Okutay",
      image: "http://www.erayokutay.com/assets/img/eray.png",
      placeCount: 3,
    },
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
}

export default Users;

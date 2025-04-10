import React, { useState } from "react";

function User() {
  const [search, setSearch] = useState("");
  const users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
  ];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users..."
        className="border p-2 rounded mb-4"
      />
      <ul className="list-disc">
        {filteredUsers.map((user, index) => (
          <li key={index} className="text-lg">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
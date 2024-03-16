import React, { useState, useEffect } from 'react';

function UserCard({ user }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`user-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>Email: {user.email}</p>
      </div>
      <div className="back">
        <p>Phone: {user.phone_number}</p>
        <p>Address: {user.address.city}, {user.address.state}</p>
      </div>
    </div>
  );
}

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default User;
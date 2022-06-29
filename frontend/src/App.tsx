import React, { FC, useState, useEffect } from 'react';

import { User } from './types';

import { List, Card } from './components';

const App: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3001/users.json', { method: 'GET' });
      const usersFromResponse = await response.json();
      setUsers(usersFromResponse);
    }

    fetchUsers();

  }, []);

  return (
    <div>
      <h1>Siit</h1>
      <List.Container>
        {users.map(({ id, name, avatar_url: avatarUrl, position, service_ids: servicesIds }) => (
          <List.Item key={id}>
            <Card name={name} avatarUrl={avatarUrl} position={position} servicesIds={servicesIds} />
          </List.Item>
        ))}
      </List.Container>
    </div>
  );
};

export default App;

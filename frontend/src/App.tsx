import React, { FC, useState, useEffect } from 'react';

import { User, Service } from './types';

import { List, UserCard, ServiceCard } from './components';

const App: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3001/users.json', { method: 'GET' });
      const usersFromResponse = await response.json();
      setUsers(usersFromResponse);
    }

    const fetchServices = async () => {
      const response = await fetch('http://localhost:3001/services.json', { method: 'GET' });
      const servicesFromResponse = await response.json();
      setServices(servicesFromResponse);
    }

    fetchUsers();
    fetchServices();
  }, []);

  return (
    <div>
      <h1>Siit</h1>
      <section>
        <h2>Users</h2>
        <List.Container>
          {users.map(({ id, name, avatar_url: avatarUrl, position, service_ids: servicesIds }) => (
            <List.Item key={id}>
              <UserCard
                name={name}
                avatarUrl={avatarUrl}
                position={position}
                servicesIds={servicesIds}
              />
            </List.Item>
          ))}
        </List.Container>
      </section>
      <section>
        <h2>Services</h2>
        <List.Container>
          {services.map(({ id, name, logo_url: logoUrl, website_url: websiteUrl }) => (
            <List.Item key={id}>
              <ServiceCard name={name} logoUrl={logoUrl} websiteUrl={websiteUrl} />
            </List.Item>
          ))}
        </List.Container>
      </section>
    </div>
  );
};

export default App;

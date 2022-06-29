import React, { FC, useEffect } from 'react';

import { useUsers, useServices } from './hooks';

import { Users, Services, Section } from './components';

const App: FC = () => {
  const {
    fetchAllUsers,
    fetchUsersByServiceId,
    isLoading: isLoadingUsers,
    users,
    unfilteredUsers,
  } = useUsers();
  const { fetchServices, isLoading: isLoadingService, services } = useServices();

  const handleClick = (id: number) => {
    fetchUsersByServiceId(id);
  };

  useEffect(() => {
    fetchAllUsers();
    fetchServices();
  }, []);

  return (
    <>
      <h1>Siit</h1>
      <Section title="Users" isLoading={isLoadingUsers}>
        <Users users={users} />
      </Section>
      <Section title="Services" isLoading={isLoadingService}>
        <Services services={services} unfilteredUsers={unfilteredUsers} handleClick={handleClick} />
      </Section>
    </>
  );
};

export default App;

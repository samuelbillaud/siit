import React, { FC, useMemo } from 'react';

import { Service, User } from '../../types';

import { List, ServiceCard, NoData } from '..';

type ServicesProps = {
  services: Service[];
  unfilteredUsers: User[];
  handleClick: (id: number) => void;
};
export const Services: FC<ServicesProps> = ({ services, unfilteredUsers, handleClick }) => {
  const getNumbersUsersUsingService = (id: number, usersUsingService: User[]) =>
    usersUsingService.filter(({ service_ids: serviceIds }) => serviceIds.includes(id)).length;

  const numbersUsersUsingServices = useMemo(
    () =>
      services.reduce<{ [id: number]: number }>(
        (accumulator, { id }) => ({
          ...accumulator,
          [id]: getNumbersUsersUsingService(id, unfilteredUsers),
        }),
        {}
      ),
    [services, unfilteredUsers]
  );

  return (
    <NoData data={services} message="there are no services">
      <List.Container>
        {services.map(({ id, name, logo_url: logoUrl, website_url: websiteUrl, price }) => (
          <List.Item key={id}>
            <ServiceCard
              id={id}
              name={name}
              logoUrl={logoUrl}
              websiteUrl={websiteUrl}
              price={price}
              numbersUsersUsingService={numbersUsersUsingServices[id]}
              handleClick={handleClick}
            />
          </List.Item>
        ))}
      </List.Container>
    </NoData>
  );
};

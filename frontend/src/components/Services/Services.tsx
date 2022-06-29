import React, { FC } from 'react';

import { Service } from '../../types';

import { List, ServiceCard, NoData } from '..';

type ServicesProps = {
  services: Service[];
  handleClick: (id: number) => void;
};
export const Services: FC<ServicesProps> = ({ services, handleClick }) => (
  <NoData data={services} message="there are no services">
    <List.Container>
      {services.map(({ id, name, logo_url: logoUrl, website_url: websiteUrl }) => (
        <List.Item key={id}>
          <ServiceCard
            id={id}
            name={name}
            logoUrl={logoUrl}
            websiteUrl={websiteUrl}
            handleClick={handleClick}
          />
        </List.Item>
      ))}
    </List.Container>
  </NoData>
);

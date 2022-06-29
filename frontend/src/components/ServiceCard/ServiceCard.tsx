import React, { FC } from 'react';

import { Service } from '../../types';

import './ServiceCard.scss';

type ServiceCardProps = Omit<Service, 'logo_url' | 'price' | 'website_url'> & {
  logoUrl: Service['logo_url'];
  websiteUrl: Service['website_url'];
  handleClick: (id: number) => void;
};
export const ServiceCard: FC<ServiceCardProps> = ({
  id,
  name,
  logoUrl,
  websiteUrl,
  handleClick,
}) => (
  <div className="serviceCard">
    <header>
      <a href={websiteUrl}>
        <img src={logoUrl} alt={`${name} logo`} />
        <div>{name}</div>
      </a>

      <button type="button" onClick={() => handleClick(id)}>
        See all users
      </button>
    </header>
  </div>
);

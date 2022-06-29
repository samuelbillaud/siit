import React, { FC } from 'react';

import { Service } from '../../types';

import './ServiceCard.scss';

type ServiceCardProps = Omit<Service, 'logo_url' | 'website_url'> & {
  logoUrl: Service['logo_url'];
  websiteUrl: Service['website_url'];
  numbersUsersUsingService: number;
  handleClick: (id: number) => void;
};
export const ServiceCard: FC<ServiceCardProps> = ({
  id,
  name,
  logoUrl,
  websiteUrl,
  price,
  numbersUsersUsingService,
  handleClick,
}) => {
  const {
    cost_per_user: costPerUser,
    flat_cost: flatCost,
    nb_users_included: nbUsersIncluded,
  } = price;

  const monthlyCost = flatCost + costPerUser * (numbersUsersUsingService - nbUsersIncluded);

  return (
    <div className="serviceCard">
      <header>
        <a href={websiteUrl} target="_blank" rel="noreferrer">
          <img src={logoUrl} alt={`${name} logo`} />
          <div>{name}</div>
        </a>
      </header>
      <main>
        <p>{monthlyCost}€ by month</p>
        <button type="button" onClick={() => handleClick(id)}>
          See all users
        </button>
      </main>
    </div>
  );
};

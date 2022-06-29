import React, { FC } from 'react';

import { User } from '../../types';

import './Card.scss';

type CardProps = Omit<User, 'id' | 'avatar_url' | 'service_ids'> & {
  avatarUrl: User['avatar_url'];
  servicesIds: User['service_ids'];
};
export const Card: FC<CardProps> = ({ name, avatarUrl, position, servicesIds }) => (
  <div className="card">
    <header>
      <img src={avatarUrl} alt={`${name} avatar`} />
      <div className="generalInformations">
        <div>{name}</div>
        <div>{position}</div>
      </div>
    </header>
    <main>
      <p>Used services</p>
      <ul>
        {servicesIds.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </main>
  </div>
);

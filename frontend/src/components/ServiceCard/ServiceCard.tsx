import React, { FC } from 'react';

import { Service } from '../../types';

import './ServiceCard.scss';

type ServiceCardProps = Omit<Service, 'id' | 'logo_url' | 'price' | 'website_url'> & {
  logoUrl: Service['logo_url'];
  websiteUrl: Service['website_url'];
};
export const ServiceCard: FC<ServiceCardProps> = ({ name, logoUrl, websiteUrl }) => (
    <div className="serviceCard">
      <header>
        <a href={websiteUrl}>
        <img src={logoUrl} alt={`${name} logo`} />
        <div>{name}</div>

        </a>
      </header>
    </div>
  );

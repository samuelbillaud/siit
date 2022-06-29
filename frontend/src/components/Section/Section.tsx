import React, { FC, ReactNode } from 'react';

import './Section.scss';

type SectionProps = {
  title: string;
  isLoading: boolean;
  children: ReactNode;
};
export const Section: FC<SectionProps> = ({ title, isLoading, children }) => (
  <section>
    <h2>{title}</h2>
    {isLoading ? <div className="loading">Loading...</div> : children}
  </section>
);

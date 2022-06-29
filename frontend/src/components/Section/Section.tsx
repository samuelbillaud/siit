import React, { FC, ReactNode } from 'react';

type SectionProps = {
  title: string;
  isLoading: boolean;
  children: ReactNode;
};
export const Section: FC<SectionProps> = ({ title, isLoading, children }) => (
  <section>
    <h2>{title}</h2>
    {isLoading ? <div>Loading...</div> : children}
  </section>
);

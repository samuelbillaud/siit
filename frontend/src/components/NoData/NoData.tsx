import React, { FC, ReactElement } from 'react';

import { User, Service } from '../../types';

import './NoData.scss';

type NoData = {
  data: (Service | User)[];
  message: string;
  children: ReactElement;
};
export const NoData: FC<NoData> = ({ data, message, children }) =>
  data.length ? children : <div className="noData">{message}</div>;

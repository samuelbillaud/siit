import React, { FC } from 'react';

import { User } from '../../types';

import { List, UserCard, NoData } from '..';

type UsersProps = {
  users: User[];
};
export const Users: FC<UsersProps> = ({ users }) => (
  <NoData data={users} message="there are no users">
    <List.Container>
      {users.map(({ id, name, avatar_url: avatarUrl, position, service_ids: servicesIds }) => (
        <List.Item key={id}>
          <UserCard
            name={name}
            avatarUrl={avatarUrl}
            position={position}
            servicesIds={servicesIds}
          />
        </List.Item>
      ))}
    </List.Container>
  </NoData>
);

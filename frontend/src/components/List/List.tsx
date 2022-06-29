import React, { FC, ReactNode } from 'react';

import './List.scss';

type ListProps = {
  children: ReactNode;
}

const Container: FC<ListProps> = ({ children }) => <ul className="container">{children}</ul>;


const Item: FC<ListProps> = ({ children }) => <li className="item">{children}</li>;

export const List = { Container, ...{ Item } };

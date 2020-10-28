import React from 'react';
import './index.scss';
import Card from '../card';
import { ContainerSM } from '../../shared';

const List = ({ title, items, itemFormat, className, itemClassName }) => (
  <Card className={className} title={title}>
    <ContainerSM className="container-m-s">
      {items && items.map((i) => <p className={itemClassName ?? "text text-md"}>{itemFormat(i)}</p>)}
    </ContainerSM>
  </Card>
);

export default List;

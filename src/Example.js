import {Item} from '@react-stately/collections';

import { Select } from './local';

export function Example() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];

  return (
    <>
      <Select label="Pick an engineering major" items={options}>
        {(item) => <Item>{item.name}</Item>}
      </Select>
    </>
  );
}


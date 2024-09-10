'use client';

import OpenAPIClientAxios from 'openapi-client-axios';
import { useQuery } from '@tanstack/react-query';
import { Client, Pet } from './types/openapi';

const api = new OpenAPIClientAxios({
  definition: './openapi.yml',
});

export default function App() {
  const petsQuery = useQuery(['pets'], () =>
    api
      .getClient<Client>()
      .then((client) => client.getPets().then((res) => res.data))
  );

  return (
    <div>
      <h1>OpenAPI Stack Demo</h1>
      <div>
        {petsQuery.data?.map((pet) => <PetItem key={pet.id} item={pet} />) ??
          'Loading...'}
      </div>
    </div>
  );
}

const PetItem = (props: { item: Pet }) => {
  return (
    <div>
      {props.item.type} {props.item.name}
    </div>
  );
};

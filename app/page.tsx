'use client';

import { OpenAPIClientAxios } from 'openapi-client-axios';
import { useQuery } from '@tanstack/react-query';
import type { Client, Components } from './types/openapi';

const api = new OpenAPIClientAxios({
  definition: './openapi.yml',
});

export default function App() {
  const petsQuery = useQuery(['pets'], () =>
    api
      .getClient<Client>()
      .then((client) => client.getPets().then((res) => res.data))
  );

  if (petsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>OpenAPI Stack Demo</h1>
      <div>
        {petsQuery.data?.map((pet) => (
          <PetItem item={pet} />
        ))}
      </div>
    </div>
  );
}

const PetItem = (props: { item: Components.Schemas.Pet }) => {
  return (
    <div>
      {props.item.type} {props.item.name}
    </div>
  );
};
import { OpenAPIBackend } from 'openapi-backend';
import type { NextApiRequest, NextApiResponse } from 'next';

const api = new OpenAPIBackend({ definition: 'public/openapi.yml' });

api.register({
  getPets: (_c, _req: NextApiRequest, res: NextApiResponse) =>
    res.status(200).json([
      { id: 1, type: 'cat', name: 'Garfield' },
      { id: 2, type: 'dog', name: 'Odie' },
    ]),
  notFound: (_c, _req: NextApiRequest, res: NextApiResponse) =>
    res.status(404).json({ err: 'not found' }),
  validationFail: (c, _req: NextApiRequest, res: NextApiResponse) =>
    res.status(400).json({ err: c.validation.errors }),
});

api.init();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return api.handleRequest(
    {
      method: req.method ?? 'get',
      path: req.url ?? '/',
      body: req.body,
      headers: req.headers as {},
    },
    req,
    res
  );
}
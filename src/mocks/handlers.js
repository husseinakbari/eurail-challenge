import { rest } from 'msw';
import database from './database.json';

export const handlers = [
  rest.get('https://randomuser.me/api', (req, res, ctx) => {
    const results = req.url.searchParams.get('results');

    return res(
      ctx.status(200),
      ctx.json({
        ...database,
        info: {
          seed: 'a3a0f54a385432cd',
          results,
          page: 1,
          version: '1.4',
        },
      })
    );
  }),
];

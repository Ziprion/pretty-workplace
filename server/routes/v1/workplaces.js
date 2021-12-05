import express from 'express';
import { getAuthUserEmail } from '../../utils/index.js';
import { getUser } from '../../db/users.js';

export const workplacesRouter = express.Router();

export const mockWorkplaces = [
  {
    id: 1,
    title: 'my first workplace',
    boards: [
      {
        id: 1,
        title: 'first board',
        items: [
          {
            id: 1, title: 'first item', url: 'asd', icon: 'jira',
          },
          {
            id: 2, title: 'second item', url: 'asd', icon: 'jira',
          },
        ],
      },
      {
        id: 2,
        title: 'second board',
        icon: [
          {
            id: 3, title: 'third item', url: 'asd',
          },
          {
            id: 4, title: 'fouth item', url: 'asd',
          },
        ],
      },
    ],
  },
];

workplacesRouter.get('/myworkplaces', async (req, res) => {
  const email = getAuthUserEmail(req);
  const user = await getUser(email);

  if (!user) {
    return res.status(404).send({ message: 'user does not exist' });
  }

  const response = {
    workplaces: mockWorkplaces,
  };

  return res.status(200).send(response);
});

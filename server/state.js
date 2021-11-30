export const users = [
  {
    id: 1,
    authInfo: {
      email: 'admin@mail.ru',
      password: 'admin',
      token: null,
    },
    workplacesInfo: {
      workplacesId: [1],
      lastUsedWorkplaceId: 1,
    },
    userInfo: {
      lastName: 'Novikov',
      firstName: 'Maxim',
      avatar: {
        background: '#ac35ef',
        url: null,
      },
    },
  },
];

export const workplaces = [
  {
    id: 1,
    title: 'my first workplace',
    boards: [
      {
        id: 1,
        title: 'first board',
        icon: 'qwe',
      },
      {
        id: 2,
        title: 'second board',
        icon: 'asd',
      },
    ],
    items: [
      {
        id: 1, title: 'first item', url: 'asd', icon: 'jira', boardId: 1,
      },
      {
        id: 2, title: 'second item', url: 'asd', icon: 'jira', boardId: 2,
      },
    ],
  },
];

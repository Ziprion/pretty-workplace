const BOARDS_ROUTES = {
  ADD: '/api/boards/add',
  DELETE: '/api/boards/delete',
};

export const ADD = (data) => ({
  method: 'post',
  url: BOARDS_ROUTES.ADD,
  data,
});

export const DELETE = (data) => ({
  method: 'delete',
  url: BOARDS_ROUTES.DELETE,
  data,
});

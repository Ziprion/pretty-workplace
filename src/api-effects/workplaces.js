export const ALL = () => ({
  method: 'get',
  url: '/api/workplaces',
});

export const ADD = (data) => ({
  method: 'post',
  url: '/api/workplaces',
  data,
});

export const ACTIVE = () => ({
  method: 'get',
  url: '/api/workplaces/active',
});

export const EDIT = (data) => ({
  method: 'put',
  url: '/api/workplaces/active',
  data,
});

export const DELETE = () => ({
  method: 'delete',
  url: '/api/workplaces/active',
});

export const CHANGE_ACTIVE = (data) => ({
  method: 'put',
  url: '/api/workplaces/active/change',
  data,
});

export const CHANGE_BOARDS_POSITION = (data) => ({
  method: 'put',
  url: '/api/workplaces/active/boardsPosition',
  data,
});

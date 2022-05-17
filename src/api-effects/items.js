export const ADD = (data) => ({
  method: 'post',
  url: '/api/items',
  data,
});

export const EDIT = ({ id, ...data }) => ({
  method: 'put',
  url: `/api/items/${id}`,
  data,
});

export const DELETE = (id) => ({
  method: 'delete',
  url: `/api/items/${id}`,
});

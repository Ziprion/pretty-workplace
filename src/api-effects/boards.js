export const ADD = (data) => ({
  method: 'post',
  url: '/api/boards',
  data,
});

export const EDIT = ({ id, data }) => ({
  method: 'patch',
  url: `/api/boards/${id}`,
  data,
});

export const DELETE = (id) => ({
  method: 'delete',
  url: `/api/boards/${id}`,
});

export const CHANGE_ITEMS_POSITION = ({ id, itemsPosition: data }) => ({
  method: 'patch',
  url: `/api/boards/${id}/itemsPosition`,
  data,
});

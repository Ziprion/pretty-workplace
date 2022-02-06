const ITEMS_ROUTES = {
  ADD: '/api/items/add',
  DELETE: '/api/items/delete',
};

export const ADD = (data) => ({
  method: 'post',
  url: ITEMS_ROUTES.ADD,
  data,
});

export const DELETE = ({ itemId }) => ({
  method: 'delete',
  url: `${ITEMS_ROUTES.DELETE}/${itemId}`,
});

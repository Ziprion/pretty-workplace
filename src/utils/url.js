export const getUrlIcon = (url) => {
  const { hostname, protocol } = new URL(url);

  return `${protocol}//${hostname}/favicon.ico`;
};

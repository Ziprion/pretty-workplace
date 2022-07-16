export const internalErrorHandler = (res, { message, code }) => {
  console.log(`Internal server error: message - ${message}, code - ${code}`);

  return res.status(500).send({ message: 'internalServerError' });
};

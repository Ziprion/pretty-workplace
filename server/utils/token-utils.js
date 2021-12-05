import jwt from 'jsonwebtoken';

export const getToken = (id, email) => jwt.sign({ id, email }, process.env.TOKEN_SECRET);

export const verifyToken = (token) => jwt.verify(token, process.env.TOKEN_SECRET);

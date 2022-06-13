import jwt from 'jsonwebtoken';

const generateToken = (payload, secret, expiresIn) => jwt.sign(payload, secret, { expiresIn });
const verifyToken = (token, secret) => jwt.verify(token, secret);

export const generateTokens = (id, email) => {
  const payload = {
    id,
    email,
  };

  const accessToken = generateToken(payload, process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_EXPIRE_TIME);
  const refreshToken = generateToken(payload, process.env.REFRESH_TOKEN_SECRET, process.env.REFRESH_TOKEN_EXPIRE_TIME);

  return {
    accessToken,
    refreshToken,
  };
};

export const verifyAccessToken = (token) => verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
export const verifyRefreshToken = (token) => verifyToken(token, process.env.REFRESH_TOKEN_SECRET);

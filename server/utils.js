import { users } from './state.js'
import _ from 'lodash'

export const getAuthUser = (userId, userEmail) => users.find(({ id, authInfo: { email } }) => id === userId && email === userEmail)
export const getUserByEmail = (userEmail) => users.find(({ authInfo: { email } }) => email === userEmail)

export const getReqUserEmail = (req) => _.get(req, 'userEmail').toLowerCase();
export const getReqUserId = (req) => _.get(req, 'userId');
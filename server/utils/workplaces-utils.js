import { workplaces } from '../state.js';

export const getWorkplacesByUser = (user) => user.workplacesInfo.workplacesId
  .map((workplaceId) => workplaces.find(({ id }) => id === workplaceId));

export const getLastUsedWorkplaceIdByUser = (user) => user.workplacesInfo?.lastUsedWorkplaceId;

import * as AUTH from './auth';
import * as BOARDS from './boards';
import * as ITEMS from './items';
import * as USER from './user';
import * as WORKPLACES from './workplaces';

export * from './use-api-effect';

export const API_EFFECTS = {
  AUTH,
  WORKPLACES,
  USER,
  ITEMS,
  BOARDS,
};

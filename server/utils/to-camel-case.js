import _ from 'lodash';

export const toCamelCase = (data) => {
  if (_.isArray(data)) {
    return _.map(data, toCamelCase);
  }

  if (_.isObject(data)) {
    return _(data)
      .mapKeys((v, k) => _.camelCase(k))
      .mapValues((v) => toCamelCase(v))
      .value();
  }

  return data;
};

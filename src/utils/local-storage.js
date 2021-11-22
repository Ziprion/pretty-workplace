export const getStorageItem = (key) => window.localStorage.getItem(key) || '';

export const setStorageItem = (key, value) => window.localStorage.setItem(key, value);

export const removeStorageItem = (key) => window.localStorage.removeItem(key);

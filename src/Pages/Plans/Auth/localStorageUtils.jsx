// localStorageUtils.js

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {};
};

export const updateLocalStorage = (key, newData) => {
  const existingData = getFromLocalStorage(key);
  const updatedData = { ...existingData, ...newData };
  saveToLocalStorage(key, updatedData);
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

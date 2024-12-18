const storageKey = "todoData";

export const saveToLocalStorage = (data) => {
  localStorage.setItem(storageKey, JSON.stringify(data));
};

export const clearLocalStorage = () => {
  localStorage.removeItem(storageKey);
};

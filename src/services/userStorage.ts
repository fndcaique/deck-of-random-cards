const USER_KEY = '@user/name';

export const saveUser = (username: string) =>
  localStorage.setItem(USER_KEY, username);

export const getUser = () => localStorage.getItem(USER_KEY);

export const removeUser = () => localStorage.removeItem(USER_KEY);

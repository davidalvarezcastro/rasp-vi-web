import Cookies from 'js-cookie';


// Cookies methods
export const setCookieByName = (key, value) => {
  Cookies.set(key, value);
};

export const getCookieByName = (key) => {
  return Cookies.get(key);
};
const JWT_TOKEN_KEY = "accessToken";

let _accessToken = localStorage.getItem(JWT_TOKEN_KEY) || "";

export const setAccessToken = (token) => {
  localStorage.setItem(JWT_TOKEN_KEY, token);
  _accessToken = token;
};

export const getAccessToken = () => {
  return _accessToken;
};

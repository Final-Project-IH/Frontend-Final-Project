import { createHttp } from "./BaseService";

const http = createHttp(false);

export const login = ({ username, password }) =>
  http.post("/login", { username, password });

export const registerUser = ({ email, username, password }) => {
  console.log("entra", email);
  return http.post("/register", { email, username, password });
};

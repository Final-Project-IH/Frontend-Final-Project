import { createHttp } from "./BaseService";

const http = createHttp(false);

export const login = ({ username, password }) =>
  http.post("/login", { username, password });

export const register = ({ email, username, password }) => {
  http.post("/register", { email, username, password });
};

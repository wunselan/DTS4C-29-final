import { useJwt, decodeToken  } from "react-jwt";

export const isLoggedIn = () => {
  const isLogged = localStorage.getItem('token');
  return isLogged || false;
}

export const userData = () => {
  const token = localStorage.getItem('token');
  const user = decodeToken(token);
  return user || {};
}
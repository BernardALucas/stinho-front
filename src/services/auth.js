export const TOKEN_KEY = "@stinho-Token";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const login = (token) => {
  sessionStorage.setItem(TOKEN_KEY, token.acessToken);
  localStorage.setItem("user", JSON.stringify(token.user));
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("user");
};

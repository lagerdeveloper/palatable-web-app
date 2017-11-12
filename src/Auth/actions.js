export function authSuccess(login, jwt) {
  return {
    type: 'AUTH_SUCCESS',
    login,
    jwt,
  };
}

export function logout() {
  return { type: 'LOGOUT' };
}

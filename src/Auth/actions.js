export function signUp(username, email, password) {
  return {
    type: 'SIGN_UP',
    username,
    email,
    password,
  };
}

export function signIn(login, password) {
  return {
    type: 'SIGN_IN',
    login,
    password,
  };
}

export function logout() {
  return { type: 'LOGOUT' };
}

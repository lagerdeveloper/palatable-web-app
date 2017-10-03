export function signUp(username, email, password) {
  return {
    type: 'SIGN_UP',
    username,
    email,
    password,
  };
}

export function logout() {
  return { type: 'LOGOUT' };
}

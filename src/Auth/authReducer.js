export default (prevState = { authenticated: false }, action) => {
  switch(action.type) {
    case 'AUTH_SUCCESS':
      return { jwt: action.jwt, login: action.login, authenticated: true };
    case 'LOGOUT':
      return { authenticated: false };
    default:
      return prevState;
  }
}

export default (prevState = { fetching: false, authenticated: false }, action) => {
  switch(action.type) {
    case 'SIGN_UP':
      return { fetching: true, authenticated: false };
    case 'SIGN_UP_SUCCESS':
      return { fetching: false, jwt: action.jwt, login: action.login, authenticated: true };
    case 'SIGN_UP_FAILURE':
      return { fetching: false, error: action.error, authenticated: false };
    case 'SIGN_IN':
      return { fetching: true };
    case 'SIGN_IN_SUCCESS':
      return { fetching: false, jwt: action.jwt, login: action.login, authenticated: true };
    case 'SIGN_IN_FAILURE':
      return { fetching: false, authenticated: false, error: action.error };
    case 'LOGOUT':
      return { fetching: false, authenticated: false };
    default:
      return prevState;
  }
}

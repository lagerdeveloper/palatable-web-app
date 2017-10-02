export default (prevState = { fetching: false, authenticated: false }, action) => {
  switch(action.type) {
    case 'SIGN_UP':
      return { fetching: true };
    case 'SIGN_UP_SUCCESS':
      return { fetching: false, jwt: action.jwt, authenticated: true };
    case 'SIGN_UP_FAILURE':
      return { fetching: false, error: action.error };
    default:
      return prevState;
  }
}

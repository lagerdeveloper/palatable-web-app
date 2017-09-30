export default (prevState = { fetching: false }, action) => {
  switch(action.type) {
    case 'SIGN_UP':
      return { fetching: true };
    case 'SIGN_UP_FAILURE':
      return { fetching: false };
    default:
      return prevState;
  }
}

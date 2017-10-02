class LocalStorageManager {
  //loads all keys from localStorage into this applications redux store
  load() {
    try {
      const state = localStorage.getItem('state');
      if (state === null) {
        return undefined;
      }
      return JSON.parse(state);
    } catch (e) {
      return undefined;
    }
  }

  /*
    data is an object to be saved in LocalStorage
    data should either be the whole redux store state or a subset of it
    'state' key will be used to store the data in localStorage
  */
  save(data) {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem('state', serializedData);
    } catch (e) {
      console.log(e.message);
    }
  }

  //clears all keys in localStorage for this application
  clear() {
    localStorage.clear();
  }
}


export default new LocalStorageManager();

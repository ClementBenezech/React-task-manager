//This function will try to get any pre-existing state from the LocalStorage, and turn it back into a JSON object
//If none exists, it will return undefined. 
export const loadState = () => {
  try {
    const serialState = localStorage.getItem('appState');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

//This function takes the current state, turns it to string and saves it in localStorage.
export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('appState', serialState);
  } catch(err) {
      console.log(err);
  }
};

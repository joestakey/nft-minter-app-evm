import { createStore } from 'redux';
import nftReducer from './nftReducer';


const writeToLocalStorage = (state) => {
  try {
    localStorage.setItem('nftIndex', JSON.stringify(state.nftIndex));
    console.log(`We just wrote this in storage: ${localStorage.getItem('nftIndex')}`);
  } catch (err) {
    console.warn(err)
  }
};
const readFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('nftIndex');
    const index = JSON.parse(serialisedState);
    console.log(`we are reading from storage! the item is ${index.nftIndex}, which is a type ${typeof(index.nftIndex)}`);
    return serialisedState === null ? undefined : index;
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};
// const composeEnhancers = compose(
//   applyMiddleware(...middleware)
// );


const store = createStore(nftReducer, readFromLocalStorage());

store.subscribe(() => writeToLocalStorage(store.getState()))

export default store_localStorage;

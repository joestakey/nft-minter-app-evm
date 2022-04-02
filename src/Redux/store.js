import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import nftReducer from './nftReducer';

const persistConfig = {
  key: 'primary',
  storage,
};

const persistedReducer = persistReducer(persistConfig, nftReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor };

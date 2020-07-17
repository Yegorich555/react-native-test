import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const initStore = () => {
  const persistor = persistStore(store);
  return { store, persistor };
};

export { store as RootStore };

export default initStore;

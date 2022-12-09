import { applyMiddleware, createStore, Action, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { reducers, TStore } from './reducers';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistReducer<TStore, Action<TStore>>(
        {
          key: 'some preferred key',
          storage,
          whitelist: [/*Store names*/],
          stateReconciler: autoMergeLevel2
        },
        reducers
    ),
    composeEnhancers(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);

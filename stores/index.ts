import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from "@redux-saga/core";
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { isClientSide } from '@utils/request';

const initialState = {};

const sagaMiddleware = createSagaMiddleware()

const middlewares = [ sagaMiddleware ];

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['connector'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, initialState, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

store.subscribe(() => {
	if (process.env.NODE_ENV === 'development' && isClientSide()) {
        console.log('store', store.getState());
    }
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper;
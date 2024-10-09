import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from './posts/postApi';
import postsReducer from '@/store/posts/postSlice';
import commentsReducer from '@/store/comments/commentSlice';
import postVideoShouldPlayReducer from './posts/postVideoShouldPlaySlice';
import apiErrorReducer from '@/store/error/apiErrorSlice';
import { commentApi } from './comments/commentApi';

export const store = configureStore({
	reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
		[commentApi.reducerPath]: commentApi.reducer,
		errorApi: apiErrorReducer,
		posts: postsReducer,
		postVideoShouldPlay: postVideoShouldPlayReducer,
		comments: commentsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postsApi.middleware, commentApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

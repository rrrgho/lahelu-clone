import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from './posts/postApi';
import postsReducer from '@/store/posts/postSlice';
import commentsReducer from '@/store/comments/commentSlice';
import { commentApi } from './comments/commentApi';

export const store = configureStore({
	reducer: {
		[postsApi.reducerPath]: postsApi.reducer,
		[commentApi.reducerPath]: commentApi.reducer,
		posts: postsReducer,
		comments: commentsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postsApi.middleware, commentApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { IPost } from '@/constants/type';
import { postsApi } from '@/store/posts/postApi';
import { createSlice } from '@reduxjs/toolkit';

interface PostsState {
	posts: IPost[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: PostsState = {
	posts: [],
	status: 'idle',
	error: null,
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		resetPosts: (state) => {
			state.posts = [];
		},
		generateNewPost: (state) => {
			const newPost: IPost = {
				id: 'test' + new Date(),
				caption:
					'Automatic meme generate by clicking Buat Meme, Buat Topik & Meme Generator',
				image: 'https://cache.lahelu.com/image-P4TLDHiOf-33559',
				user: {
					id: 'test-user' + new Date(),
					name: 'Iregho',
				},
			};
			state.posts = [newPost, ...state.posts];
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(postsApi.endpoints.fetchPosts.matchPending, (state) => {
				state.status = 'loading';
			})
			.addMatcher(
				postsApi.endpoints.fetchPosts.matchFulfilled,
				(state, action) => {
					state.status = 'succeeded';
					state.posts = [...state.posts, ...action.payload];
				},
			)
			.addMatcher(
				postsApi.endpoints.fetchPosts.matchRejected,
				(state, action) => {
					state.status = 'failed';
					state.error = action.error.message || null;
				},
			);
	},
});

export const { resetPosts, generateNewPost } = postsSlice.actions;

export default postsSlice.reducer;

import { IPost } from '@/constants/type';
import { postsApi } from '@/store/posts/postApi';
import { createSlice } from '@reduxjs/toolkit';

interface PostsState {
	posts: IPost[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
	videoShouldPlay: number;
}

const initialState: PostsState = {
	posts: [],
	status: 'idle',
	error: null,
	videoShouldPlay: -1,
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
				uid: 'sdadadad',
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
					/**
					 * SAME ID POSSIBILY RETURNED
					 * to avoid same identifier of the API response behaviour,
					 * I add UID Generator, this because we possible to return same data in API
					 */
					const uniquePosts = action.payload.map((post, index) => ({
						...post,
						uid: `${post.id}-${index}-${Math.random().toString(36).substring(2, 15)}`,
					}));
					state.posts = [...state.posts, ...uniquePosts];
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

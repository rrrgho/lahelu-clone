import { IComment } from '@/constants/type';
import { createSlice } from '@reduxjs/toolkit';
import { commentApi } from './commentApi';

interface CommentState {
	comments: IComment[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: CommentState = {
	comments: [],
	status: 'idle',
	error: null,
};

const commentSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		resetComments: (state) => {
			state.comments = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(commentApi.endpoints.fetchComments.matchPending, (state) => {
				state.status = 'loading';
			})
			.addMatcher(
				commentApi.endpoints.fetchComments.matchFulfilled,
				(state, action) => {
					state.status = 'succeeded';
					// state.comments = [...state.comments, ...action.payload];
					state.comments = [...action.payload];
				},
			)
			.addMatcher(
				commentApi.endpoints.fetchComments.matchRejected,
				(state, action) => {
					state.status = 'failed';
					state.error = action.error.message || null;
				},
			);
	},
});

export const { resetComments } = commentSlice.actions;

export default commentSlice.reducer;

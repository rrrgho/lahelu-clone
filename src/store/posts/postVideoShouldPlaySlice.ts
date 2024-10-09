import { createSlice } from '@reduxjs/toolkit';

interface PostVideoShouldPlayState {
	videoShouldPlay: number;
}

const initialState: PostVideoShouldPlayState = {
	videoShouldPlay: -1,
};

const postVideoShouldPlaySlice = createSlice({
	name: 'postVideoShouldPlay',
	initialState,
	reducers: {
		setVideoShouldPlay: (state, action) => {
			state.videoShouldPlay = action.payload;
		},
	},
});

export const { setVideoShouldPlay } = postVideoShouldPlaySlice.actions;

export default postVideoShouldPlaySlice.reducer;

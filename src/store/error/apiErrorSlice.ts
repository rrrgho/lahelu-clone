import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApiErrorState {
	status: boolean;
	errorMessage: string | null;
}

const initialState: ApiErrorState = {
	status: false,
	errorMessage: null,
};

export const apiErrorSlice = createSlice({
	name: 'apiError',
	initialState,
	reducers: {
		apiErrorOccurred: (state, action: PayloadAction<string>) => {
			state.status = true;
			state.errorMessage = action.payload;
		},
		clearApiError: (state) => {
			state.status = false;
			state.errorMessage = null;
		},
	},
});

export const { apiErrorOccurred, clearApiError } = apiErrorSlice.actions;

export default apiErrorSlice.reducer;

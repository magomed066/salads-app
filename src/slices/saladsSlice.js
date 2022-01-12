import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import SaladsService from '../services/salads.service'
import { setMessage } from './messageSlice'

const initialState = {
	salads: [],
	loading: false,
	error: false,
}

export const getSalads = createAsyncThunk('salads/getAll', async (thunkAPI) => {
	try {
		const data = await SaladsService.getSalads()

		return data.result
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString()

		thunkAPI.dispatch(setMessage(message))

		return thunkAPI.rejectWithValue()
	}
})

const saladsSlice = createSlice({
	name: 'salads',
	initialState,
	extraReducers: {
		[getSalads.pending]: (state) => {
			state.loading = true
		},
		[getSalads.fulfilled]: (state, action) => {
			state.loading = false
			state.salads = action.payload
		},
		[getSalads.rejected]: (state) => {
			state.loading = false
			state.error = true
		},
	},
})

const { reducer } = saladsSlice

export default reducer

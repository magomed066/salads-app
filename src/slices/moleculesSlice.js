import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MoleculesService from '../services/molecules.service'
import { setMessage } from './messageSlice'
const initialState = {
	molecules: [],
	loading: false,
	error: false,
}

export const getMolecules = createAsyncThunk(
	'malecules/getAll',
	async (thunkAPI) => {
		try {
			const data = await MoleculesService.getMolecules()

			return data.result
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()

			thunkAPI.dispatch(setMessage(message))

			return thunkAPI.rejectWithValue()
		}
	},
)

const moleculesSlice = createSlice({
	name: 'molecules',
	initialState,
	extraReducers: {
		[getMolecules.pending]: (state) => {
			state.loading = true
		},
		[getMolecules.fulfilled]: (state, action) => {
			state.loading = false
			state.molecules = action.payload
		},
		[getMolecules.rejected]: (state) => {
			state.loading = false
			state.error = true
		},
	},
})

const { reducer } = moleculesSlice

export default reducer

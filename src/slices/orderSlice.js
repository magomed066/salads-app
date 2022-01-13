import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import OrderService from '../services/order.service'
import { setMessage } from './messageSlice'
const initialState = {
	order: {},
	loading: false,
	error: false,
}

export const createOrder = createAsyncThunk(
	'order/create',
	async (order, thunkAPI) => {
		try {
			const data = await OrderService.createOrder(order)

			thunkAPI.dispatch(setMessage(data.result))

			return data
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

const orderSlice = createSlice({
	name: 'order',
	initialState,
	extraReducers: {
		[createOrder.pending]: (state) => {
			state.loading = true
		},
		[createOrder.fulfilled]: (state, action) => {
			state.loading = false
			state.order = action.payload
		},
		[createOrder.rejected]: (state) => {
			state.loading = false
			state.error = true
		},
	},
})

const { reducer } = orderSlice

export default reducer

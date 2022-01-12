import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isActive: false,
}

const messageSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		open: (state) => {
			state.isActive = true
		},
		close: (state) => {
			state.isActive = false
		},
	},
})

const { reducer, actions } = messageSlice

export const { open, close } = actions

export default reducer

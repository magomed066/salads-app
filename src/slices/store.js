import { configureStore } from '@reduxjs/toolkit'
import moleculesReducer from './moleculesSlice'
import messageReducer from './messageSlice'
import saladsReducer from './saladsSlice'

const reducer = {
	message: messageReducer,
	molecules: moleculesReducer,
	salads: saladsReducer,
}

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
})

export default store

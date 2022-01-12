import { configureStore } from '@reduxjs/toolkit'
import moleculesReducer from './moleculesSlice'
import messageReducer from './messageSlice'
import saladsReducer from './saladsSlice'
import modalReducer from './modalSlice'

const reducer = {
	message: messageReducer,
	molecules: moleculesReducer,
	salads: saladsReducer,
	modal: modalReducer,
}

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
})

export default store

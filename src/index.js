import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components'
import { Provider } from 'react-redux'
import store from './slices/store'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)

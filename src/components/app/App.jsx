import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Salads } from '../'
import { MakeOrder, Salad } from '../../pages'

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Salads />} />
					<Route path="/salad/:id" element={<Salad />} />
					<Route path="/make-order" element={<MakeOrder />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

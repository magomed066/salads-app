import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
	Alert,
	Button,
	Col,
	Container,
	Form,
	ListGroup,
	Row,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMolecules } from '../../slices/moleculesSlice'
import { createOrder } from '../../slices/orderSlice'
import { Spinner } from '../../components'
import { setMessage } from '../../slices/messageSlice'

const MakeOrder = () => {
	const [order, setOrder] = useState([])
	const dispatch = useDispatch()

	const { molecules, loading: loadingMols } = useSelector(
		(state) => state.molecules,
	)
	const { message } = useSelector((state) => state.message)
	const {
		order: orderInfo,
		loading,
		error,
	} = useSelector((state) => state.order)

	useEffect(() => {
		dispatch(getMolecules())
	}, [])

	const submitHandler = (e) => {
		e.preventDefault()

		if (!order.length) {
			alert('Choose items')
			return
		}

		const filteredOrder = order.map((item) => ({ id: item.id, qty: item.qty }))

		const data = {
			molecules: filteredOrder,
		}

		dispatch(createOrder(data))

		setTimeout(() => {
			dispatch(setMessage(''))
		}, 2000)

		setOrder([])
	}

	return (
		<Container>
			<Row>
				<Col xs={12} sm={12} md={12}>
					<Button as={Link} to="/" variant="dark" className="mb-3">
						Back
					</Button>
					<hr />
					<h2 className="mb-3">Make Order</h2>

					<Form onSubmit={submitHandler}>
						{message && orderInfo && <Alert variant="success">{message}</Alert>}
						{message && error && <Alert variant="danger">{message}</Alert>}
						{loading && <Spinner />}
						<Row>
							<Col>
								<ListGroup>
									{molecules.map((item, i) => (
										<ListGroup.Item key={item._id}>
											<h4>{item.title}</h4>

											<div className="d-flex align-items-center">
												<Button
													disabled={
														!item.qty ||
														order.find((o) => o.id === item._id)?.qty >=
															item.qty
															? true
															: false
													}
													onClick={() => {
														const exist = order.find((o) => o.id === item._id)
														const newOrder = [...order]

														if (exist) {
															exist.qty++
															setOrder(newOrder)
														} else {
															setOrder((prev) => [
																...prev,
																{ id: item._id, qty: 1, name: item.title },
															])
														}
													}}
												>
													{!item.qty ||
													order.find((o) => o.id === item._id)?.qty >= item.qty
														? 'Out of stock'
														: '	Add'}
												</Button>
											</div>
										</ListGroup.Item>
									))}
								</ListGroup>
							</Col>
							<Col>
								<ListGroup>
									{order.length ? (
										order.map((item) => (
											<ListGroup.Item key={item.id}>
												<h5>{item.name}</h5>
												<h5>Quantity: {item.qty}</h5>

												<Button
													variant="danger"
													onClick={() => {
														const exist = order.find((o) => o.id === item.id)
														const updatedOrder = [...order]

														if (exist.qty > 1) {
															exist.qty--
															setOrder(updatedOrder)
														} else {
															setOrder(order.filter((o) => o.id !== item.id))
														}
													}}
												>
													Delete
												</Button>
											</ListGroup.Item>
										))
									) : (
										<h3>Select Molecules</h3>
									)}
								</ListGroup>
							</Col>
						</Row>
						<Button className="mt-3" variant="success" type="submit">
							Make order
						</Button>
						<Button
							className="mt-3 ms-3"
							variant="danger"
							onClick={() => setOrder([])}
						>
							Clear
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default MakeOrder

import React from 'react'
import { useEffect } from 'react'
import {
	Col,
	Container,
	Row,
	Button,
	ListGroup,
	Form,
	Alert,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSaladById } from '../../slices/saladsSlice'
import { Spinner } from '../../components'
import { getMolecules } from '../../slices/moleculesSlice'
import filterData from '../../helper/filterData'
import { createOrder } from '../../slices/orderSlice'
import { setMessage } from '../../slices/messageSlice'

const Salad = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const { loading, salad } = useSelector((state) => state.salads)
	const {
		order,
		loading: loadingOrder,
		error,
	} = useSelector((state) => state.order)
	const { message } = useSelector((state) => state.message)
	const { molecules, loading: loadingMols } = useSelector(
		(state) => state.molecules,
	)

	const submitHandler = (e) => {
		e.preventDefault()

		const filteredMolecules = salad.composition.map((item) => ({
			id: item,
			qty: 1,
		}))
		const data = {
			molecules: filteredMolecules,
		}

		setTimeout(() => {
			dispatch(setMessage(''))
		}, 2000)

		dispatch(createOrder(data))
	}

	useEffect(() => {
		dispatch(getSaladById(id))
		dispatch(getMolecules())
	}, [])

	return (
		<Container>
			<Row>
				<Col xs={12} sm={12} md={12}>
					{loading || loadingMols ? (
						<Spinner />
					) : (
						<>
							<Button
								as={Link}
								to="/"
								variant="dark"
								className="mb-3"
								type="button"
							>
								Back
							</Button>
							<hr />

							{message && order && <Alert variant="success">{message}</Alert>}
							{message && error && <Alert variant="danger">{message}</Alert>}
							{loadingOrder && <Spinner />}

							<h2>{salad.title}</h2>

							<ListGroup className="mt-4">
								{filterData(molecules, salad.composition).map((item) => {
									return (
										<ListGroup.Item key={item._id}>
											Malecula: {item.title} | Price: ${item.price} | Discount
											price: {item.discount_price}
										</ListGroup.Item>
									)
								})}
							</ListGroup>

							<Form onSubmit={submitHandler}>
								<Button variant="success" className="mt-4" type="submit">
									Make Order
								</Button>
							</Form>
						</>
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default Salad

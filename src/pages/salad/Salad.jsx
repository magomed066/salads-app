import React from 'react'
import { useEffect } from 'react'
import { Col, Container, Row, Button, ListGroup, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSaladById } from '../../slices/saladsSlice'
import { Spinner } from '../../components'
import { getMolecules } from '../../slices/moleculesSlice'
import filterData from '../../helper/filterData'

const Salad = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const { loading, salad } = useSelector((state) => state.salads)
	const { molecules, loading: loadingMols } = useSelector(
		(state) => state.molecules,
	)

	useEffect(() => {
		dispatch(getSaladById(id))
		dispatch(getMolecules())
	}, [])

	const sabmitHandler = (e) => {
		e.preventDafault()
	}

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

							<Button variant="success" className="mt-4" type="submit">
								Make Order
							</Button>
						</>
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default Salad

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMolecules } from '../../slices/moleculesSlice'

const MakeOrder = () => {
	const [order, setorder] = useState([])
	const [isActives, setIsActives] = useState([])
	const dispatch = useDispatch()

	const { molecules, loading: loadingMols } = useSelector(
		(state) => state.molecules,
	)

	console.log(isActives)

	useEffect(() => {
		dispatch(getMolecules())
	}, [])

	return (
		<Container>
			<Row>
				<Col xs={12} sm={12} md={12}>
					<Button as={Link} to="/" variant="dark" className="mb-3">
						Back
					</Button>
					<hr />
					<h2 className="mb-3">Make Order</h2>

					<ButtonGroup aria-label="Basic example">
						{molecules.map((item, i) => (
							<Button
								key={item._id}
								variant={isActives[i] === item._id ? 'success' : 'secondary'}
								onClick={() => {
									const exist = isActives.find((i) => i === item._id)
									const oldActives = [...isActives]

									if (exist) {
										let newActives = oldActives.filter((i) => i !== exist)

										setIsActives(newActives)
									} else {
										setIsActives((prev) => [...prev, item._id])
									}
								}}
							>
								{item.title}
							</Button>
						))}
					</ButtonGroup>
				</Col>
			</Row>
		</Container>
	)
}

export default MakeOrder

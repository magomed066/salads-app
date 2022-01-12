import React from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '..'
import { getSalads } from '../../slices/saladsSlice'

const Salads = () => {
	const dispatch = useDispatch()
	const { loadign, salads } = useSelector((state) => state.salads)

	useEffect(() => {
		dispatch(getSalads())
	}, [])

	return (
		<Container>
			<Row>
				<Col sm={12} xs={12} md={7}>
					<h3 className="mb-5">All Salads</h3>

					{loadign ? 'Loading...' : ''}
					{/* <Card /> */}
					{salads.map((item) => (
						<Card key={item._id} item={item} />
					))}
				</Col>
			</Row>
		</Container>
	)
}

export default Salads

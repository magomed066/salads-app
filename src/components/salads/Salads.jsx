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
			<Row className="d-flex ">
				<h3 className="mb-5">All Salads</h3>
				{loadign ? 'Loading...' : ''}
				<Col sm={12} xs={12} md={12} className="d-flex gap-4 flex-wrap">
					{salads.map((item) => (
						<Card key={item._id} item={item} />
					))}
				</Col>
			</Row>
		</Container>
	)
}

export default Salads

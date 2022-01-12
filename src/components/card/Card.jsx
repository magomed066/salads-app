import React from 'react'
import { Button, Card as CardItem } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { open } from '../../slices/modalSlice'

const Card = ({ item }) => {
	const dispatch = useDispatch()

	return (
		<CardItem style={{ width: '18rem' }}>
			<CardItem.Img variant="top" src={item.image} />
			<CardItem.Body>
				<CardItem.Title className="mb-4">{item.title}</CardItem.Title>
				<CardItem.Text>Price: ${item.price}</CardItem.Text>
				<CardItem.Text>Discount price: ${item.discount_price}</CardItem.Text>
				<Button variant="primary" onClick={() => dispatch(open())}>
					View the salad
				</Button>
			</CardItem.Body>
		</CardItem>
	)
}

export default Card

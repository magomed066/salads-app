import React from 'react'
import { Button, Card as CardItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
	return (
		<CardItem style={{ width: '18rem' }}>
			<CardItem.Img variant="top" src={item.image} />
			<CardItem.Body>
				<CardItem.Title className="mb-4">{item.title}</CardItem.Title>
				<CardItem.Text>Price: ${item.price}</CardItem.Text>
				<CardItem.Text>Discount price: ${item.discount_price}</CardItem.Text>
				<Button as={Link} variant="primary" to={`/salad/${item._id}`}>
					View the salad
				</Button>
			</CardItem.Body>
		</CardItem>
	)
}

export default Card

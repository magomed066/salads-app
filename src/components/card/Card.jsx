import React from 'react'
import { Button, Card as CardItem } from 'react-bootstrap'

const Card = ({ item }) => {
	console.log(item)
	return (
		<CardItem style={{ width: '18rem' }}>
			<CardItem.Img variant="top" src={item.image} />
			<CardItem.Body>
				<CardItem.Title>Card Title</CardItem.Title>
				<CardItem.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</CardItem.Text>
				<Button variant="primary">Go somewhere</Button>
			</CardItem.Body>
		</CardItem>
	)
}

export default Card

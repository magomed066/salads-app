import React from 'react'
import { Spinner as SpinnerItem } from 'react-bootstrap'

const Spinner = () => {
	return (
		<SpinnerItem animation="border" role="status">
			<span className="visually-hidden">Loading...</span>
		</SpinnerItem>
	)
}

export default Spinner

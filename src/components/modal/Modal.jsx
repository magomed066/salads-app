import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Modal as ModalItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../slices/modalSlice'

const ModalContent = () => {
	const dispatch = useDispatch()
	const { isActive } = useSelector((state) => state.modal)

	const handleClose = () => dispatch(close())

	return (
		<ModalItem show={isActive} onHide={handleClose}>
			<ModalItem.Header closeButton>
				<ModalItem.Title>Modal heading</ModalItem.Title>
			</ModalItem.Header>
			<ModalItem.Body>
				Woohoo, you're reading this text in a modal!
			</ModalItem.Body>
			<ModalItem.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</ModalItem.Footer>
		</ModalItem>
	)
}

const Modal = () => {
	return (
		<>
			{ReactDOM.createPortal(
				<ModalContent />,
				document.getElementById('modal'),
			)}
		</>
	)
}

export default Modal

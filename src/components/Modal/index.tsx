import React,{ useState } from 'react'
import {ModalContainer, ModalContent, CloseModal} from './style'


const Modal = () => {

    const [showModal, setModal] = useState(true)

    const displayModal = () =>{
        return showModal ? "block" : "none"
    }

    return (
      <ModalContainer style={{"display": displayModal()}}>
        <ModalContent>
          <CloseModal onClick={()=> setModal(false)}>&times;</CloseModal>
          <p>Hello {localStorage.username}!</p>
        </ModalContent>
      </ModalContainer>
    )

}

export default Modal
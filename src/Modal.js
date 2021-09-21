import React, {useContext} from 'react'
import { AppContext } from './context'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {

  const {modal, closeModal} = useContext(AppContext);

  

  return (
    <div className={`modal-overlay ${modal ? 'show-modal' : null}`}>
      <div className='modal-container'>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={closeModal} >
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal

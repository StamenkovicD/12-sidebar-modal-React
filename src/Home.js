import React, { useContext } from 'react'
import { AppContext } from './context'
import { FaBars } from 'react-icons/fa'

const Home = () => {

  
  const {openModal, openSidebar} = useContext(AppContext);
  

  return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars />
    </button>
    <button className='btn' onClick={openModal}>show Modal</button>
  </main>
}

export default Home

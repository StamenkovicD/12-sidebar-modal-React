import React, {useContext} from 'react'
import { AppContext } from './context'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {

  const {sidebar, closeSidebar} = useContext(AppContext);
  

  return (
    <aside className={`sidebar ${sidebar ? 'show-sidebar' : null}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {
          links.map((link) => {
            const {id, url, text, icon} = link;
            return (
              <li key={id}>
                <a href={url}>{icon}{text}</a>
              </li>
            )
          })
        }
      </ul>
      <ul className='social-icons'>
        {
          social.map((socialItem) => {
            const {id, url, icon} = socialItem;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default Sidebar

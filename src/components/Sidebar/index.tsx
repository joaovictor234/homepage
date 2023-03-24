import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.css'

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isHover, setIsHover] = useState(true);

  useEffect(() => {

  }, [isHover])

  return (
    <div className={
      isHover ?
      `${styles.sidebar} ${styles.sidebar_maximized}` :
      `${styles.sidebar} ${styles.sidebar_minimized}`
    } onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      {
        isHover ?
          <ul>
            <NavLink
              to='/'
              className={activeLink === 'home' ? styles.active_link : ''}
              onClick={() => setActiveLink('home')}>
              <i className="fa-sharp fa-solid fa-house"></i>
            </NavLink>
            <NavLink
              to='/admin'
              onClick={() => setActiveLink('admin')}
              className={activeLink === 'admin' ? styles.active_link : ''}>
              <i className="fa-solid fa-user-pen"></i>
            </NavLink>
            <NavLink
              to='/about'
              onClick={() => setActiveLink('about')}
              className={activeLink === 'about' ? styles.active_link : ''}>
              <i className="fa-solid fa-circle-info"></i>
            </NavLink>
          </ul> :
          <ul>
            <NavLink
              to='/'
              className={activeLink === 'home' ? styles.active_link : ''}
              onClick={() => setActiveLink('home')}>
              <i className="fa-sharp fa-solid fa-house"></i>
            </NavLink>
            <NavLink
              to='/admin'
              onClick={() => setActiveLink('admin')}
              className={activeLink === 'admin' ? styles.active_link : ''}>
              <i className="fa-solid fa-user-pen"></i>
            </NavLink>
            <NavLink
              to='/about'
              onClick={() => setActiveLink('about')}
              className={activeLink === 'about' ? styles.active_link : ''}>
              <i className="fa-solid fa-circle-info"></i>
            </NavLink>
          </ul>
      }
    </div>
  )
}

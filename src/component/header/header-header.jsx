import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import avatar from '../../assets/img/avatar.svg'
import logo from '../../assets/img/logo.svg' 
import { BurgerMenu } from '../burger-menu/burger-menu'

import  './header-header.scss' 
 
export const Header = () => {
 
  const [burgerClass,setBurgerClass] =useState('burger-bar uncliked');
  const [menuClass,setMenuClass] =useState('menu hidden')
  const [isOpen,setIsOpen] = useState(false)
  // for all books
  const status = useSelector(state =>state.books.status) 
  // for one books
  const isLoading =useSelector(state=>state.fullBook.isLoading)

 const updateMenu=()=>{

  // eslint-disable-next-line no-negated-condition
  if(!isOpen){
    setBurgerClass('burger-bar cliked')
    setMenuClass('menu visible')
  }else{
    setBurgerClass('burger-bar uncliked')
    setMenuClass('menu hidden')
  }
  setIsOpen(!isOpen)
 }


 
  return (
    <header className={status === 'loading' || isLoading === 'loading' ? 'headerBlur':'header'}>
      <nav className='header__nav'>
        <div className='header-logo'>
          <NavLink to='/'>
            <img src={logo} className='logo' alt='logo' />
          </NavLink>
          <div
            data-test-id='button-burger'
            className='burger__menu'
            role='button'
            tabIndex='0'
            onClick={updateMenu}
            onKeyPress={updateMenu}
          >
            <div className={burgerClass} />
            <div className={burgerClass} />
            <div className={burgerClass} />
          </div>
          {isOpen && (
            <div
              className={menuClass}
              role='button'
              tabIndex='0'
              onClick={updateMenu}
              onKeyPress={updateMenu}
              data-test-id='burger-navigation'
            >
              <BurgerMenu setMenuClass={setMenuClass} setBurgerClass={setBurgerClass} setIsOpenBurgerMenu={setIsOpen} />
            </div>
          )}
        </div>
        <div className='header__title'>Библиотека</div>
        <div className='header__user'>
          <div className='user__text'>Привет, Иван!</div>
          <div className='user__ava'>
            <img src={avatar} alt='ava' />
          </div>
        </div>
      </nav>
    </header>
  );
};


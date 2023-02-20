/* eslint-disable react/no-array-index-key */
import  React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink, useLocation } from 'react-router-dom'

import strokeActive from '../../assets/img/Stroke.svg';
import strokeBlack from '../../assets/img/StrokeBlack.svg';
import { changeActiveCategory,changeIsOpen } from '../../redux/Slices/side';

import style from './burger-menu.module.scss';
 
 
export const BurgerMenu = ({setMenuClass,setBurgerClass,setIsOpenBurgerMenu}) => {
    // fot category
    const isLoading = useSelector(state =>state.categoty.isLoading)
    // for books
    const status = useSelector((state) => state.books.status);
    const categories =useSelector(state=>state.categoty.categories)
    const setActive = ({ isActive }) => (isActive ? style.active__title :style.item );
   
    const location =useLocation()
    const isOpen =useSelector(state=>state.sideBar.isOpen)

    const activeCategory=useSelector(state=>state.sideBar.activeCategory)
    const dispatch =useDispatch();
    const isOpenForLi =isOpen? style.showBook__list__item: style.showBook__list__None
  
    const activeTitle = location.pathname.includes('books') ? style.activeTitle: undefined;
    
    const changeCategory=(index)=>{
      dispatch(changeActiveCategory(index))
      dispatch(changeIsOpen(false))

      // for Burger Menu
      setMenuClass('menu hidden')
      setBurgerClass('burger-bar uncliked')
      setIsOpenBurgerMenu(false)
    }
    
    // useEffect(()=>{
    //   dispatch()
    // },[])
  

    return (
      <React.Fragment>
        <div
          className={style.sidebar}
          role='button'
          tabIndex='0'
          onClick={(e) => e.stopPropagation()}
          onKeyPress={(e) => e.stopPropagation()}
        >
          <ul className={style.sidebar__parts}>
            <li className={style.sidebar__title}>
              <div>
                <NavLink to='/books/all' className={`${setActive} ${activeTitle}`}>
                  <div
                    className={style.shop}
                    role='button'
                    tabIndex='0'
                    onClick={() => dispatch(changeIsOpen(!isOpen))}
                    onKeyPress={() => dispatch(changeIsOpen(!isOpen))}
                    data-test-id='burger-showcase'
                  >
                    <div className={style.shop__title}>Витрина книг</div>
                    <img
                      src={isOpen ? strokeActive : strokeBlack}
                      className={isOpen ? style.shop__strokeRevers : style.shop__strokeClassic}
                      alt=''
                    />
                  </div>
                </NavLink>
                {isLoading !== 'error' && status !== 'error' ? (
                  <ul>
                    {' '}
                    {categories.map((item) => (
                      <NavLink to={`/books/${item.path}`}>
                        <li key={item.id}>
                          <div
                            role='button'
                            tabIndex='0'
                            onClick={() => changeCategory(item.id)}
                            onKeyPress={() => changeCategory(item.id)}
                            className={`${isOpenForLi} ${item.id === activeCategory && style.active}`}
                            data-test-id='burger-books'
                          >
                            {item.name}
                            <span className={style.item__count}> 14</span>
                          </div>
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
            <li className={style.sidebar__title}>
              <NavLink
                to='/page-rules'
                className={setActive}
                role='button'
                tabIndex='0'
                onClick={() => dispatch(changeIsOpen(false))}
                onKeyPress={() => dispatch(changeIsOpen(false))}
                data-test-id='burger-terms'
              >
                Правила пользования
              </NavLink>
            </li>
            <li className={style.sidebar__title}>
              <NavLink
                to='/page-offer'
                className={setActive}
                role='button'
                tabIndex='0'
                onClick={() => dispatch(changeIsOpen(false))}
                onKeyPress={() => dispatch(changeIsOpen(false))}
                data-test-id='burger-contract'
              >
                Договор оферты
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.borderLine} />
        <div className={style.userblock}>
          <ul className={style.sidebar__parts}>
            <li className={style.sidebar__title}>Профиль</li>
            <li className={style.sidebar__title}>Выход </li>
          </ul>
        </div>
      </React.Fragment>
    );
  
}


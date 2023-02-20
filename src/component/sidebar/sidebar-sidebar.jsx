/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/no-array-index-key */
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink, useLocation, useParams } from 'react-router-dom'

import strokeActive from '../../assets/img/Stroke.svg';
import strokeBlack from '../../assets/img/StrokeBlack.svg';
import { fetchCategory } from '../../redux/Slices/category-slice';
import { changeActiveCategory,changeIsOpen } from '../../redux/Slices/side';

import style from './sidebar-sidebar.module.scss';
 
 
export const Sidebar = () => {
  const param =useParams()
 
  const categories =useSelector(state=>state.categoty.categories)
  // fot category
  const isLoading = useSelector(state =>state.categoty.isLoading)
  // for books
  const status = useSelector((state) => state.books.status);

    const setActive = ({ isActive }) => (isActive ? style.active__title :style.item );
    // forList
  
    const isOpen=useSelector( state =>state.sideBar.isOpen)
    const activeCategory=useSelector( state =>state.sideBar.activeCategory)

    const location =useLocation()
    const dispatch =useDispatch()

    const isOpenForLi =isOpen? style.showBook__list__item: style.showBook__list__None

    const activeTitle = location.pathname.includes('books') ? style.activeTitle: undefined;


    const changeCategory=(index)=>{
      dispatch(changeActiveCategory(index))
      dispatch(changeIsOpen(false))
    }
    
    useEffect(()=>{
      try {
        dispatch(fetchCategory())
      } catch (error) {
        alert('Не уадлось получить категории')
      }
    },[])


    return (
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
                <div className={style.shop}>
                  <div
                    className={style.shop__title}
                    role='button'
                    tabIndex='0'
                    onClick={() => dispatch(changeIsOpen(!isOpen))}
                    onKeyPress={() => dispatch(changeIsOpen(!isOpen))}
                    data-test-id='navigation-showcase'
                  >
                    Витрина книг
                  </div>
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
                    <NavLink key={item.id} to={`/books/${item.path}`}> 
                      <li >
                        <div
                          role='button'
                          tabIndex='0'
                          onClick={() => changeCategory(item.id)}
                          onKeyPress={() => changeCategory(item.id)}
                          className={`${isOpenForLi} ${item.id === activeCategory && style.active}`}
                          data-test-id='navigation-books'
                        >
                          {item.name}
                          <span className={style.item__count}> 14</span>
                        </div>
                      </li>
                    </NavLink>
                  ))}
                </ul>
              ):null}
            </div>
          </li>
          <li
            role='button'
            tabIndex='0'
            className={style.sidebar__title}
            onClick={() => dispatch(changeIsOpen(false))}
            onKeyPress={() => dispatch(changeIsOpen(false))}
          >
            <NavLink to='/page-rules' className={setActive} data-test-id='navigation-terms'>
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
              data-test-id='navigation-contract'
            >
              Договор оферты
            </NavLink>
          </li>
        </ul>
      </div>
    );
  
}


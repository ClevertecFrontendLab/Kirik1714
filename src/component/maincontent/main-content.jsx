/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBooks } from '../../redux/Slices/book-slice';
import { BookCart } from '../book-cart/book-cart';
import { Loader } from '../Loader/loader';
import { Locationbook } from '../location-book/location-book';
import { Search } from '../search/search-search';
import {Sort} from '../sort/sort-sort';

import style from './main-content.module.scss'



export const MainContent = () => {
  const [location,setLocation]=useState(true)
  
  const [isFocused,setIsFocuced] =useState(false)
  const [width,setWidth] =useState(window.innerWidth)
  const books =useSelector(state=>state.books.books)
  const status =useSelector(state=>state.books.status)
  const isLoading = useSelector(state =>state.categoty.isLoading)

  const dispatch =useDispatch();

  

  React.useEffect(()=>{ 
   try {
    dispatch(fetchBooks())
    
   } catch (error) {
    alert('Не получил книги')
   }
    // ForWidth
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
},[])

// changeForLocationBookCart
  const changeLocationToRow=()=>{
    setLocation(false)
  }
  const changeLocationToReactangle=()=>{
    setLocation(true)
  } 
 

  

  return (
    <section className={style.mainContent}>
      <div className={status === 'loading'  && isLoading === 'loading' ? style.mainContent__filter__blur :style.mainContent__filter}>
        <div className={style.filter__search}>
          <Search
            isFocused={isFocused}
            width={width}
            focusedTrue={() => setIsFocuced(true)}
            focusedFalse={() => setIsFocuced(false)}
          />
        </div>
        {isFocused && width <= 666 ? null : (
          <div className={style.filter__sort}>
            <Sort />
          </div>
        )}
        {isFocused && width <= 666 ? null : (
          <div className={style.filter__locationBook}>
            <Locationbook
              location={location}
              changeLocationToRow={changeLocationToRow}
              changeLocationToReactangle={changeLocationToReactangle}
            />
          </div>
        )}
      </div>
     
    
      {status === 'loading' && isLoading === 'loading'  ? (
          <Loader />
      ) : (
        <section className={location ? style.mainContent__cardBook__block : style.mainContent__cardBook__row}>
          {books.map((item) => (
            <Link to={`/books/all/${item.id}`} key={item.id}>
              <BookCart location={location} {...item} />
            </Link>
          ))}
        </section>
      )}
    </section>
  );
};

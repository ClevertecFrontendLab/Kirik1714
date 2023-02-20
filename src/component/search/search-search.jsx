import {  useRef, useState } from 'react';

import close from '../../assets/img/Close.svg'
import search from '../../assets/img/search.svg'

import style from './search-search.module.scss'

export const Search = ({isFocused,focusedTrue,focusedFalse,width}) => {
    const [value,setValue] =useState('')
    const inputRef = useRef(null)
    const visibleInput = (isFocused && width<=666)  ? style.search__inputActive:style.search__input

    return (
      <div className={style.search} role='button'    tabIndex='0' onFocus={focusedTrue} onBlur={focusedFalse}>
        <div className={ (width<=666 && !isFocused) && style.conteiner}> <img src={search} alt='search'  data-test-id='button-search-open' className={style.search__icon} /></div>
        <input
          type='text'
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder='Поиск книги или автора…'
          className={`${visibleInput}  `}
          data-test-id='input-search'
        />
        
        {isFocused && (
          <div
            className={style.close__icon}
            role='button'
            tabIndex='0'
            onClick={focusedFalse}
            onKeyDown={focusedFalse}
            data-test-id='button-search-close'
          >
            <img src={close} alt='close' />
          </div>
        )}
      </div>
    );
}
 

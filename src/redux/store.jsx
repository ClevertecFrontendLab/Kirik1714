/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

import bookSlice from './Slices/book-slice';
import categorySlice from './Slices/category-slice';
import fullBookSlice from './Slices/full-book-slice';
import  sideBarSlice  from './Slices/side';



export const store = configureStore({
    reducer:{
        sideBar:sideBarSlice,
        books:bookSlice,
        fullBook:fullBookSlice,
        categoty:categorySlice,
    },
})
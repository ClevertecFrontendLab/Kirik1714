/* eslint-disable dirnames/match-kebab-case */
/* eslint-disable import/no-extraneous-dependencies */

import { createSlice } from '@reduxjs/toolkit';

const initialState={
    isOpen:true,
    activeCategory:0,
}

export const sideBarSlice = createSlice({
    name:'sideBar',
    initialState,
    reducers:{
        changeIsOpen:(state,action)=>{
            // eslint-disable-next-line no-param-reassign
            state.isOpen=action.payload
        },
        changeActiveCategory:(state,action)=>{
            // eslint-disable-next-line no-param-reassign
            state.activeCategory= action.payload
        },

    }

})
export const {changeIsOpen,changeActiveCategory} = sideBarSlice.actions

// eslint-disable-next-line import/no-default-export
export  default sideBarSlice.reducer
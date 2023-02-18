/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable dirnames/match-kebab-case */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategory=createAsyncThunk('category/fetchCategory',
    async()=>{
        const {data} = await axios.get('https://strapi.cleverland.by/api/categories')
    
        return data
    }
)

const initialState={
    categories:[],
    isLoading:'loading',
}
 
export const CategorySlice=createSlice({
    name:'category',
    initialState,
    reducer:{
        setCategory:(state,action)=>{
            state.category= action.payload
        }
    },
    extraReducers:{
        [fetchCategory.pending]:(state)=>{
            state.isLoading='loading'
            state.categories=[]

            
        },
        [fetchCategory.fulfilled]:(state,action)=>{
            state.categories = action.payload
            state.isLoading='sucess'
            
        },
        [fetchCategory.rejected]:(state)=>{
            state.isLoading='error';
            state.categories=[]
        }
    }
    
})
export  const {setCategory} =CategorySlice.actions

export default CategorySlice.reducer
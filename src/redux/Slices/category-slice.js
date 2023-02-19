/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable dirnames/match-kebab-case */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    categories:[],
    isLoading:'loading',
}

export const fetchCategory=createAsyncThunk('category/fetchCategory',
    async()=>{
        const {data} = await axios.get('https://strapi.cleverland.by/api/categories')
    
        console.log('Из Slice')
        console.log(data)

        return data
    }
)

 
export const CategorySlice=createSlice({
    name:'category',
    initialState,
    reducer:{
        setCategory:(state,action)=>{
            state.category= action.payload
        }
    },
    extraReducers: builder =>{
        builder
        .addCase( fetchCategory.pending ,(state)=>{
            state.isLoading='loading'
            state.categories=[]

        })
        .addCase( fetchCategory.fulfilled ,(state,action)=>{
            state.categories = action.payload
            state.isLoading='sucess'

        })
        .addCase( fetchCategory.rejected ,(state,action)=>{
            state.isLoading='error';
            state.categories=[]

        })


    }
    
})
export  const {setCategory} =CategorySlice.actions

export default CategorySlice.reducer
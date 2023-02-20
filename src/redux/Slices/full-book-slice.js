/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable dirnames/match-kebab-case */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
 
export const fetchFullBook=createAsyncThunk('bookId/fetchFullBook',
    async(id)=>{
        const {data}= await axios(`https://strapi.cleverland.by/api/books/${id}`)
        
        return data
    }
)

const initialState={ 
    fullBook:[],
    isLoading:'',
}

export const fullBookdSlice=createSlice({
    name:'fullBook',
    initialState,
    reducer:{
        setFullBook:(state,action)=>{
            state.fullBook= action.payload
        }
    },
    extraReducers:{
        [fetchFullBook.pending]:(state)=>{
            state.isLoading='loading'
            state.fullBook=[]

            
        }, 
        [fetchFullBook.fulfilled]:(state,action)=>{
            state.fullBook = action.payload
            state.isLoading='sucess'
            
        },
        [fetchFullBook.rejected]:(state)=>{
            state.isLoading='error';
            state.fullBook=[]
        }
    }
    
})
export  const {setFullBook} =fullBookdSlice.actions

export default fullBookdSlice.reducer
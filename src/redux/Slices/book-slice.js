/* eslint-disable import/no-default-export */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line dirnames/match-kebab-case
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks',
    async() =>{
        const {data} = await axios.get('https://strapi.cleverland.by/api/books');

        return data
    }
)


const initialState ={
    books:[],
    status:''
}
 
export  const  bookSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
       setBooks:(state,action)=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.books = action.payload
       }
    },
    extraReducers:{
        [fetchBooks.pending]:(state)=>{
            state.status='loading'
            state.books=[]
        },
        [fetchBooks.fulfilled]:(state,action)=>{
            state.books = action.payload
            state.status='success'


        },
        [fetchBooks.rejected]:(state,action)=>{
            state.status='error'
            state.books=[]
        },
    }
    
})

export const {setBooks} = bookSlice.actions

export default bookSlice.reducer
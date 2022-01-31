import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axiosInstance from '../../HttpServices/axiosInstance'

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async ({pageBlogs, numberBlogs}, { rejectWithValue }) => {
    try {
      const {data} = await axiosInstance.get(`/photos?_page=${pageBlogs}&_limit=${numberBlogs}`)
      return data
    } catch (err) {
      let error = err; 
      return rejectWithValue(error.response.data.error);
    }
  })

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: { entities: []},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.entities = [...state.entities, ...action.payload].filter(el => el.id )
    })
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default blogsSlice.reducer
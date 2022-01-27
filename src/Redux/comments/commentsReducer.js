import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axiosInstanceUsers from '../../HttpServices/axiosInstanceUsers'

export const fetchListUsers = createAsyncThunk('users/readListUser', async (_, { rejectWithValue }) => {
    try {
      const {data} = await axiosInstanceUsers.get('/user?limit=5')
      return data
    } catch (err) {
      let error = err; 
      return rejectWithValue(error.response.data.error);
    }
  })

const commentsSlice = createSlice({
  name: 'comments',
  initialState: { entities: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      state.entities = action.payload.data
    })
    builder.addCase(fetchListUsers.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default commentsSlice.reducer
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import blogsReducer from "./blogs/blogsReducer";

const store = configureStore({
    reducer: combineReducers({
        blogs: blogsReducer,
    })
})

export default store
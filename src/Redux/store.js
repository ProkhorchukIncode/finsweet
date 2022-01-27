import { combineReducers, configureStore } from "@reduxjs/toolkit";

import blogsReducer from "./blogs/blogsReducer";
import commentsReducer from "./comments/commentsReducer";

const store = configureStore({
    reducer: combineReducers({
        blogs: blogsReducer,
        comments: commentsReducer,
    })
})

export default store
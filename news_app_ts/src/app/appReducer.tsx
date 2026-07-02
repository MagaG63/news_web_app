import { combineReducers } from "@reduxjs/toolkit";
import { newsSlice } from "../entities/news/model/newsSlice";
import { newsApi } from "../entities/news/api/newsApi";
import { categoryApi } from "../entities/category/api/categoryApi";

export const rootReducer = combineReducers({
  news: newsSlice.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
});

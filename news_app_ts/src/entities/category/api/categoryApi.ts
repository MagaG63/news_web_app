import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CategoriesApiResponse } from "../model/categoryTypes";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesApiResponse, void>({
      query: () => {
        return {
          url: "available/categories",
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;

import { apiSlice } from "../../features/api/apiSlice";

export const CategoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCategories: builder.query({
            query: ()=> "/categories",
            providesTags: ['categories']
        })
    })
})

export const {useGetCategoriesQuery} = CategoriesApiSlice
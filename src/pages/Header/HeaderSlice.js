import { apiSlice } from "../../features/api/apiSlice";

export const HeaderAPiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getHeader: builder.query({
            query: ()=> "/header",
            providesTags: ['header']
        })
    })
})

export const {useGetHeaderQuery} = HeaderAPiSlice
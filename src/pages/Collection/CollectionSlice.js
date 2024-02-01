import { apiSlice } from "../../features/api/apiSlice";

export const CollectionApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCollection: builder.query({
            query: ()=> "/collections",
            providesTags: ["collections"]
        }),
        getDiscover: builder.query({
            query: ()=> "/discover",
            providesTags: ["collections"]
        }),
    })
})

export const {useGetCollectionQuery, useGetDiscoverQuery} = CollectionApiSlice
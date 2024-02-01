import { apiSlice } from "../../features/api/apiSlice";

export const discoverApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDiscover: builder.query({
            query: ()=> "/discover",
            providesTags: ["discover"]
        }),
    })
})

export const {useGetDiscoverQuery} = discoverApiSlice
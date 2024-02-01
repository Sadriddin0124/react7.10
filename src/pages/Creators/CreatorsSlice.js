import { apiSlice } from "../../features/api/apiSlice";

export const CreatorsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCreators: builder.query({
            query: ()=> "/creators",
            providesTags: ['creators']
        })
    })
})

export const { useGetCreatorsQuery} = CreatorsApiSlice
import { apiSlice } from "../../features/api/apiSlice";

export const WorksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getWorks: builder.query({
            query: ()=> "/works",
            providesTags: ['works']
        })
    })
})

export const {useGetWorksQuery} = WorksApiSlice
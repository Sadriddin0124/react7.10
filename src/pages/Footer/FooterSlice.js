import { apiSlice } from "../../features/api/apiSlice";

export const FooterApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFooter: builder.query({
            query: ()=> "/footer",
            providesTags: ['footer']
        })
    })
})

export const {useGetFooterQuery} = FooterApiSlice
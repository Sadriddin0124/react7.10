import { apiSlice } from "../../features/api/apiSlice";

export const DigestApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDigest: builder.query({
            query: ()=> "/digest",
            providesTags: ['digest']
        })
    })
})

export const {useGetDigestQuery} = DigestApiSlice
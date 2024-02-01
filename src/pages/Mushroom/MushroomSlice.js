import { apiSlice } from "../../features/api/apiSlice";

export const MushroomApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMushrooms: builder.query({
            query: ()=> "/mushroom",
            providesTags: ['mushroom']
        })
    })
})

export const {useGetMushroomsQuery} = MushroomApiSlice
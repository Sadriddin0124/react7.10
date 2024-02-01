import { apiSlice } from "../../features/api/apiSlice"

export const NavbarApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getNavbar: builder.query({
            query: ()=> "/navbar",
            providesTags: ["navbar"]
        })
    })
})

export const {useGetNavbarQuery} = NavbarApiSlice
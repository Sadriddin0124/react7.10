import { apiSlice } from "../features/api/apiSlice";

export const SubscribersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addSubscribers: builder.mutation({
            query: (payload)=> ({
                url: "/subscribers",
                method: "POST",
                body: payload
            }),
            invalidatesTags: 'subscribers'
        })
    })
})

export const {useAddSubscribersMutation} = SubscribersApiSlice
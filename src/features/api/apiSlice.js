import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000"}),
    tagTypes: ["navbar", "header", "collections", "creators", "categories", "discover", "mushroom", 'works', 'digest', "footer"],
    endpoints: builder => ({})
})
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const projectApi = createApi({
    reducerPath : "projectApi",
    baseQuery : fetchBaseQuery({baseUrl : '/api/'}),
    tagTypes : ['Project'],
    endpoints: (builder) => ({
        // get Project list
        getProjects : builder.query({
            query : () => 'Project',
            providesTags : ['Project']
        }),
        // add Project 
       
    })
})


export const { useGetProjectsQuery } = projectApi;
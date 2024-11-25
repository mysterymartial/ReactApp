import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASEURL = import.meta.env.VITE_APP_BASE_URL
const APIKEY = import.meta.env.VITE_APP_API_KEY 

export const MovieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl:`${BASEURL}`}),
    endpoints:(builder)=>({
        getPopularMovies: builder.query({
            //if you want get you will use builder.mutation
            query: ()=>`${BASEURL}/movie/popular?api_key=${APIKEY}`,
        }),
        

    })
})
//under the wood this what is happening use`use${GetPopularMovies}query, it will be mutation if you getting`
//if you see use is hooks 

export const {useGetPopularMoviesQuery} = MovieApi
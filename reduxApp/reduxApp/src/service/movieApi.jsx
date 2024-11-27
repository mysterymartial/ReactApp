import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const BASEURL = import.meta.env.VITE_APP_BASE_URL
const APIKEY = import.meta.env.VITE_APP_API_KEY
export const MOVIE_IMAGE_URL = import.meta.env.VITE_APP_MOVIE_IMAGES_URL;
 

export const MovieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl:`${BASEURL}`}),
    endpoints:(builder)=>({
        getPopularMovies: builder.query({
            //if you want get you will use builder.mutation
            query: ()=>`/movie/popular?api_key=${APIKEY}`,
    
        }),
        // getTrendingMovies: builder.query({
        //     //if you want get you will use builder.mutation
        //     query: ()=>`/movie/trending?api_key=${APIKEY}`,
    
        // }),

        getNowPlayingMovies: builder.query({
            //if you want get you will use builder.mutation
            query: ()=>`/movie/now_playing?api_key=${APIKEY}`,
    
        }),

        getTopRatedMovies: builder.query({
            //if you want get you will use builder.mutation
            query: ()=>`/movie/top_rated?api_key=${APIKEY}`,
    
        }),

        getUpcomingMovies: builder.query({
            //if you want get you will use builder.mutation
            query: ()=>`/movie/upcoming?api_key=${APIKEY}`,
    
        }),



        

    })
})
//under the wood this what is happening use`use${GetPopularMovies}query, it will be mutation if you getting`
//if you see use is hooks 

export const {useGetPopularMoviesQuery, useGetTrendingMovieQuery, useGetNowPlayingMoviesQuery,useGetTopRatedMoviesQuery,useGetUpcomingMoviesQuery} = MovieApi;
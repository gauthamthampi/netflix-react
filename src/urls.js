import { baseURL,api_key } from "./constants/constant"

export const originals =`/discover/tv?api_key=${api_key}&with_networks=213`
export const actions = `discover/movie?api_key=${api_key}&with_genres=28`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`
export const comedy = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`
export const documentaries = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749'`
import React from "react"
import {MovieProvider} from "./context"
import DaftarMovieList from "./List"
import DaftarMovieForm from "./Form"

const MovieListEditor = () =>{
    return(
      <MovieProvider>
          <DaftarMovieList/>
          <br/>
          <br/>
          <DaftarMovieForm/>
      </MovieProvider>
    )
  }
  
  export default MovieListEditor
import React, {useState, useContext} from "react"
import {MovieContext} from "./context"
import axios from 'axios'
import "./Movie.css"

const DaftarMovieForm = () =>{
    const [daftarMovie, setDaftarMovie, input, setInput] = useContext(MovieContext)

    const handleSubmit = (event) =>{
        event.preventDefault()
    
        let title = input.title
        let description = input.description
        let year = input.year
        let duration = input.duration
        let genre = input.genre
        let rating = input.rating
    
        if (input.id === null){        
          axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title, description, year, duration, genre, rating, image_url: input.image_url})
          .then(res => {
              setDaftarMovie([
                ...daftarMovie, 
                { id: res.data.id, 
                  title, 
                  description,
                  year,
                  duration,
                  genre,
                  rating,
                  image_url: input.image_url
                }])
          })
        }else{
          axios.put(`http://backendexample.sanbercloud.com/api/movies/${input.id}`, {title, description, year, duration, genre, rating, image_url: input.image_url})
          .then(() => {
              let dataMovie = daftarMovie.find(el=> el.id === input.id)
              dataMovie.title = title
              dataMovie.description = description
              dataMovie.year = year
              dataMovie.duration = duration
              dataMovie.genre = genre
              dataMovie.rating = rating
              dataMovie.image_url = input.image_url
              setDaftarMovie([...daftarMovie])
          })
        }
    
        // reset input form to default
        setInput({title: "", description: "", year: 2020, duration: 120, genre: "",rating: 0, image_url: "", id: null})
    
      }

      const handleChange = (event) =>{
        let typeOfInput = event.target.name
    
        switch (typeOfInput){
          case "title":
          {
            setInput({...input, title: event.target.value});
            break
          }
          case "description":
          {
            setInput({...input, description: event.target.value});
            break
          }
          
          case "year":
          {
            setInput({...input, year: event.target.value});
            break
          }
          case "duration":
          {
            setInput({...input, duration: event.target.value});
            break
          }
          case "genre":
          {
            setInput({...input, genre: event.target.value});
            break
          }
          case "rating":
          {
            setInput({...input, rating: event.target.value});
            break
          }
          case "image_url":
          {
            setInput({...input, image_url: event.target.value});
            break
          }
        default:
          {break;}
        }
      }

    return(
        <>
        <h1>Movies Form</h1>
        <br/>
        <br/>
        <div style={{width: "60%", margin: "0 auto", display: "block"}}>
            <div style={{border: "1px solid #aaa", padding: "20px"}}>
              <form onSubmit={handleSubmit}>
                <label style={{float: "left"}}>
                  Title :
                </label>
                <input style={{float: "right"}} type="text" required name="title" value={input.title} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Description :
                </label>
                <textarea style={{resize: "none",width:"150px",float: "right"}} type="text" required name="description" value={input.description} onChange={handleChange}/>
                <br/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Year :
                </label>
                <input style={{float: "right",width:"50px"}} type="number" required name="year" value={input.year} onChange={handleChange}/>
                <br/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Duration :
                </label>
                <input style={{float: "right"}} type="number" required name="duration" value={input.duration} onChange={handleChange}/>
                <br/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Genre :
                </label>
                <input style={{float: "right"}} type="text" required name="genre" value={input.genre} onChange={handleChange}/>
                <br/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Rating :
                </label>
                <input style={{float: "right",width:"40px"}} type="text" required name="rating" value={input.rating} onChange={handleChange}/>
                <br/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                  Image URL :
                </label>
                <textarea style={{resize: "none",width:"320px",height:'50px',float: "right"}} type="text" required name="image_url" value={input.image_url} onChange={handleChange}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={{width: "100%", paddingBottom: "20px"}}>
                  <button style={{alignSelf: "center"}}>submit</button>
                </div>
              </form>
          </div>
      </div>
      </>
    )
}

export default DaftarMovieForm
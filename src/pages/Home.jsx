import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard";
import { searchMovies,getPopularMovies } from "../services/api";

function Home()
{

//     const movies = [
//   {
//     id:1,
//     name: "Inception",
//     description: "A skilled thief is given a chance at redemption if he can successfully perform inception.",
//     url: "https://physics.berkeley.edu/sites/default/files/styles/panopoly_image_original/public/oppenheimer_panel.jpg?itok=qczDargM&timestamp=1689814870",
//     release_date: "2010-07-16"
//   },
//   {id:2,
//     name: "The Matrix",
//     description: "A hacker discovers the world he lives in is a simulation and joins a rebellion.",
//     url: "https://physics.berkeley.edu/sites/default/files/styles/panopoly_image_original/public/oppenheimer_panel.jpg?itok=qczDargM&timestamp=1689814870",
//     release_date: "1999-03-31"
//   },
//   {id:3,
//     name: "Interstellar",
//     description: "A team of explorers travel through a wormhole in space to save humanity.",
//     url: "https://physics.berkeley.edu/sites/default/files/styles/panopoly_image_original/public/oppenheimer_panel.jpg?itok=qczDargM&timestamp=1689814870",
//     release_date: "2014-11-07"
//   },
//   {id:4,
//     name: "Fight Club",
//     description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club.",
//     url:"https://physics.berkeley.edu/sites/default/files/styles/panopoly_image_original/public/oppenheimer_panel.jpg?itok=qczDargM&timestamp=1689814870",
//     release_date: "1999-10-15"
//   }
// ];
const [movies, setMovies] = useState([])
const [searchQueries,SearchQueriesUpdate] = useState("")
const [error,setError] = useState(null)
const [loading,setLoading] = useState(true)




useEffect(()=>{

const loadPopularMovies = async () =>{
  try {
    const PopularMovies = await getPopularMovies() //get the popular movies in a variable
    setMovies(PopularMovies) // set the popular movies list in the setMovies state to update the state
  }
  catch(err){
    setError(`Failed to load ${err.message}`)
    console.log(err)
  } 

  finally{
    setLoading(false)
  }
}
loadPopularMovies();  

},[])//use effect Changes whenever there is a change in the dependency array and is, the funciton passed executes only when the dependency array is changed 


const searchMovie =  async (e) =>{
    e.preventDefault()
    if(loading) return 
    if (!searchQueries.trim()) return //prevent empty fields

    setLoading(true) // loading the data
    // won't search when already searching
    try{
      const searchResults = await searchMovies(searchQueries)
      setMovies(searchResults)
      setError(null)
    } catch(err)

    {
setError("Failed to Search Movies")
console.log(err)
    }
    finally{
      setLoading(false)

    }



    
}
    return <>   
    <div className="home">
        <form className="search-movie" onSubmit={searchMovie}>
        <input type="text" className="movie-name" 
        value={searchQueries}
        onChange={(e)=>SearchQueriesUpdate(e.target.value)}
        placeholder="Search For Movies..."/>
        <button type="submit" className="search-button">Search</button>
    </form>
        <div className="movies-grid">

            {
                movies.map(movie=>
                    <MovieCard movie={movie} key={movie.id}/>
                )
            }
        </div>
    </div>
    </>
}

export default Home
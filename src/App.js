import React,{useState} from "react";
import "./styles.css";

var database={
  "All": [
    {
      title: "Harry Potter",
      totalmovies: "8"
    },
    {
      title: "Lord of the Rings & Hobbit",
      totalmovies: "6"
    },
    {
      title: "John Wick",
      totalmovies: "3"
    },
    {
      title: "Fast & Furious",
      totalmovies: "9"
    },
    {
      title: "Mission Impossible",
      totalmovies: "6"
    },
    {
      title: "Marvel Avengers",
      totalmovies: "23"
    },
    {
      title: "DC Universe",
      totalmovies: "8"
    },
    {
      title: "Toy-Story",
      totalmovies: "4"
    },
    {
      title: "Minions",
      totalmovies: "4"
    }
  ],
  "Action":[
    {
      title: "John Wick",
      totalmovies: "3"
    },
    {
      title: "Fast & Furious",
      totalmovies: "9"
    },
    {
      title: "Mission Impossible",
      totalmovies: "6"
    }
  ],
  "Fantasy":[
    {
      title: "Harry Potter",
      totalmovies: "8"
    },
    {
      title: "Lord of the Rings & Hobbit",
      totalmovies: "6"
    }
  ],
  "Super-Hero":[
    {
      title: "Marvel Avengers",
      totalmovies: "23"
    },
    {
      title: "DC Universe",
      totalmovies: "8"
    }
  ],
  "Animated":[
    {
      title: "Toy-Story",
      totalmovies: "4"
    },
    {
      title: "Minions",
      totalmovies: "4"
    }
  ]
}

var genres = Object.keys(database);


export default function App() {
  const [genre ,setGenre] = useState("All");


  function genreClickHandler(genre) {
    setGenre(genre);
  }


  return (
    <div className="App">
      <h1>Best Movie-Series</h1>
      <p className="intro">
        Here are my favourite movie-series. Select any genre to view.
      </p>


      <div>
        {genres.map((genre) => (
          <button className="btn-genre"
            onClick={() => genreClickHandler(genre)} >
            {genre}
          </button>
        ))}
      </div>
      
      <div className="output">
        <ul >
          {database[genre].map((movie) => (
            <li
              key={movie.title}
              className="output-single"
              style={{
                listStyle: "none"
                }}>
              <div className="title">Title - {movie.title} </div>
              <div className="total-movies">Total movies - {movie.totalmovies} 
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // 
  );
}

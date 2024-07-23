import React, { useState } from 'react'
import './App.css';
import Navigate from './Component/Navigate';
import MovieList from './Component/MovieList';
import AddMovies from './Component/AddMovies';
import Filter from './Component/Filtre';

function App(){
const [movieList , setMovieList] = useState([
  {
    title : "Peaky blinders",
    description :"À Birmingham, en Angleterre, l'année 1919 est marquée par les exactions de l'impitoyable Tommy Shelby, un jeune chef de la pègre ivre de son désir de domination.",
    postingURL :"https://imgsrc.cineserie.com/2021/05/peaky-blinders-online.jpg?ver=1",
    rating : 5
   
  },

  {
    title : "Alcatraz",
    description :"Un groupe de prisonniers, dirigé par un voleur armé et un gangster, tente de s'échapper de la tristement célèbre île d'Alcatraz.",
    postingURL :"https://fr.web.img6.acsta.net/pictures/19/06/26/19/56/3492704.jpg",
    rating : 4
   
  },
  {
    title : "Emily in Paris",
    description :"A young American woman from the Midwest is hired by a marketing firm in Paris to provide them with an American perspective on things.",
    postingURL :"https://m.media-amazon.com/images/M/MV5BYjg0OTY5N2UtZDljZS00NDc2LWI1MDAtMDdmN2Q3OTNkMjA1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    rating : 3
  }
])
const AddNewMovies=(movie)=>{
  console.log('movie', movie)
  setMovieList ([...movieList , movie])
}




  return (
    <div>
      <Navigate/>
      <div className='my-3 text-end me-5'>
      <AddMovies addNewMovie={AddNewMovies} />
      </div>
      <div className='my-3 text-start ms-5'>
        <Filter/>
        </div>



      <MovieList data={movieList}/>
      </div>
  );
}



 

export default App;

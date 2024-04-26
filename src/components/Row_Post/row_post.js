import React, { useEffect, useState } from 'react'
import "./row_post.css"
import axios from '../../axios'
import { api_key,baseURL,imageURL } from '../../constants/constant'
import Youtube from "react-youtube"

function Rowpost(props) {
  const [row,setRow] = useState([])
  const [urlId,setUrlId] = useState("")
  useEffect(()=>{
   axios.get(props.url)
   .then((response)=>{
    console.log(response.data.results);
    setRow(response.data.results)
   })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const showVideo = (id) =>{
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`)
    .then((response)=>{
      console.log(response.data.results)
      if(response.data.results.length!=0){
      setUrlId(response.data.results[0])
      // console.log(urlId);
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
           {row.map(item => 
           <img onClick={()=>showVideo(item.id)} className={props.isSmall ? "smallPoster" : "poster"} src={`${imageURL}${item.backdrop_path}`} alt='img' />
           )}
      </div> 
      { urlId && <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default Rowpost

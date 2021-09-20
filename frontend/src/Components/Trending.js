import React from "react";
import { useEffect, useState } from "react";
// import youTube  from 'react-youtube'
import YouTube from "react-youtube";
import { API_KEY, imageUrl } from "../Constants/Constants";
import axios from "axios";
import { BrowserRouter, Link } from "react-router-dom";

function Trending(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(`discover/movie?api_key=${API_KEY}&with_genres=27`)
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
      )
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array length is 0");
        }
      });
  };

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <h2 className="titleBx">{props.title}</h2>
          <div className="posters">
            {movies.map((obj) => (
              <div className="cardx">
                <img
                  style={{ borderRadius: "9%" }}
                  id="cardImage"
                  onClick={() => handleMovie(obj.id)}
                  src={`${imageUrl + obj.backdrop_path}`}
                  alt=""
                />
                <div className="overlay">
                  <p>{obj.original_title}</p>
                  <p>
                    {obj.vote_average}
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star"></i>
                  </p>
                  <p
                    className="watch-list"
                    onClick={() => handleMovie(obj.id)}
                    src={`${imageUrl + obj.backdrop_path}`}></p>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      top: "-35px",
                      padding: "8px",
                      position: "relative",
                      fontSize: "10px",
                    }}
                    to={"/movies/" + obj.id}>
                    <i className="fa fa-play" />
                    WATCH MOVIE
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* <youTube videoId="2g811Eo7K8U" opts={opts}  />; */}
          {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Trending;

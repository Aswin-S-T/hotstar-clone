import React from "react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { API_KEY, imageUrl } from "../Constants/Constants";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Pages from "../Components/Pages";

function MovieScreen(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}/videos?api_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array length is 0");
        }
      });
  }, []);
  const opts = {
    height: "650px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {urlId && <YouTube videoId={urlId.key} opts={opts} />}
          <h1 className="titleBxm">{urlId ? urlId.name : ""}</h1>
        </div>
        <hr />
        <h3>More Like This</h3>
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default MovieScreen;

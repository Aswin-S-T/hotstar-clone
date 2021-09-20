import React from "react";
import { useState, useEffect } from "react";
import { API_KEY, imageUrl } from "../Constants/Constants";
import axios from "../axios";

function Carousel() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[5]);
        setMovie(response.data.results[2]);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid mt-5" id="carousel-card">
        <div
          id="carouselExampleControls"
          className="carousel slide container-fluid"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" id="contentBx">
              <div className="row">
                <div className="col-md-4">
                  <div className="container">
                    <h1 className="p-5">{movie ? movie.title : ""}</h1>
                    <h6 className="p-1">{movie ? movie.overview : ""}</h6>
                  </div>
                </div>
                <div
                  style={{
                    height: "390px",
                    borderRadius: "6px",
                    backgroundSize: "cover",
                    backgroundImage: `url(${
                      movie ? imageUrl + movie.backdrop_path : ""
                    })`,
                  }}
                  className="col-md-8">
                  {/* <img
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5471/1055471-h-ae308a20ac19"
                    className="d-block w-100"
                    alt="..."
                  /> */}
                </div>
              </div>
            </div>
            <div className="carousel-item" id="contentBx">
              <div className="row">
                <div className="col-md-4">
                  <div className="container">
                    <h1 className="p-5">MONEY HEIST</h1>
                    <h6 className="p-1">
                      Money Heist season 5 part 1 review: Robbers have become
                      better at holding the fort, they are sharper and snazzier.
                      The season also stands out for its brilliant backstories
                      we never knew we needed.
                    </h6>
                  </div>
                </div>
                <div className="col-md-8">
                  <img
                    style={{ height: "385px" }}
                    src="https://newslivetv.com/wp-content/uploads/2021/09/Rajasthan-company-gives-off-to-employees-to-watch-Money-Heist.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item" id="contentBx">
              <div className="row">
                <div className="col-md-4">
                  <div className="container">
                    <h1 className="p-5">GODZILA Vs KONG</h1>
                    <h6 className="p-1">
                      Five years after Godzilla defeated King Ghidorah, Kong is
                      monitored by Monarch within a giant dome on Skull Island.
                      Kong is visited by Jia, the last Iwi native and adopted
                      daughter of Kong expert Ilene Andrews, who is deaf and
                      communicates with Kong via sign language.
                    </h6>
                  </div>
                </div>
                <div className="col-md-8">
                  <img
                    style={{ height: "385px" }}
                    src="https://images5.alphacoders.com/112/thumb-1920-1126978.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

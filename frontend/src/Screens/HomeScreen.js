import React from "react";
import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import Pages from "../Components/Pages";
import Trending from "../Components/Trending";
import Actions from "../Components/Actions/Actions";
import modals from "../Components/modals/contact";

function HomeScreen() {
  return (
    <div>
      <Header />
      <Carousel />
      <modals />
      <Pages title="Entertaiments" />
      <Trending title="Horror Movies" />
      <Actions title="Trending Comedies" />
    </div>
  );
}

export default HomeScreen;

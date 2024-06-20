import React from "react";
import index from "../style/index.css";
import Title from "../components/Index/Title";
import Gallery from "../components/Index/Gallery";
import Quote from "../components/Index/Quote";

function Index() {
  return (
    <div>
      <Title />
      <Gallery />
      <Quote />
    </div>
  );
}

export default Index;

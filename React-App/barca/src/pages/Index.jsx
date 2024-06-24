import React from "react";
import index from "../style/index.css";
import Title from "../components/Index/Title";
import Gallery from "../components/Index/Gallery";
import Quote from "../components/Index/Quote";

function Index() {
  let quote = `Legend has it that when Franco's troops crushed Catalonia in 1939,
  relegating it for the next thirty-five years to abuse and neglect, one
  of his generals was asked what more he could possibly want now that he
  had Barcelona.`;
  return (
    <div>
      <Title />
      <Gallery />
      <Quote quote={quote} />
    </div>
  );
}

export default Index;

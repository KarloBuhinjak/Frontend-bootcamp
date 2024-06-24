import React from "react";

const Gallery = () => {
  return (
    <div>
      <div class="gallery-title">Barca gallery</div>
      <div class="gallery">
        <div class="photo">
          <img src="images/neymar.png" alt="neymar" />
          <div class="text">Neymar</div>
        </div>
        <div class="photo">
          <img src="images/ronaldinho.png" alt="ronaldinho" />
          <div class="text">Ronaldinho</div>
        </div>
        <div class="photo">
          <img src="images/xavi.png" alt="xavi" />
          <div class="text">Xavi</div>
        </div>
        <div class="photo">
          <img src="images/iniesta.png" alt="iniesta" />
          <div class="text">Iniesta</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

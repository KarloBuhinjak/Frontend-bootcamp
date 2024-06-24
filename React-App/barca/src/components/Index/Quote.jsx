import React from "react";

const Quote = ({ quote }) => {
  return (
    <div class="quote-content">
      <figure class="quote">
        <blockquote>{quote}</blockquote>
        <figcaption>&mdash; Michael Paterniti</figcaption>
      </figure>
    </div>
  );
};

export default Quote;

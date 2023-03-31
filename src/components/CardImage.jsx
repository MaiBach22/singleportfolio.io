import React from "react";
import Button from "./UI/Button";

export default function CardImage({ src, title, stacks, width }) {
  return (
    <article>
      {width > 768 ? (
        <div className="cardimgage">
          <img src={src} alt={title} />
          <div className="backgroundoverlay">
            <Button text="View Project" link="#" />
            <Button text="View Code" link="#" />
          </div>
        </div>
      ) : (
        <img src={src} alt={title} />
      )}

      <h3>{title}</h3>
      <div className="stack">
        {stacks.map((stack) => {
          return <p>{stack}</p>;
        })}
      </div>
      {width <= 768 ? (
        <div className="buttoncode">
          <Button text="View Project" link="#" />
          <Button text="View Code" link="#" />
        </div>
      ) : null}
    </article>
  );
}

import React from "react";

export default function CardImage({ src, title, stacks }) {
  return (
    <article>
      <img src={require(`${src}`)} alt={title} />
      <h3>{title}</h3>
      {stacks.map((stack) => {
        return (
          <div>
            <p>{stack}</p>
          </div>
        );
      })}
    </article>
  );
}

import React from "react";

export default function Button({ text, link }) {
  return (
    <button>
      <a href={link} alt={text} arial-lable="button">
        {text}
      </a>
    </button>
  );
}

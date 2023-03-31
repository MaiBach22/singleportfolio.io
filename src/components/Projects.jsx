import React from "react";
import CardImage from "./CardImage";
import Button from "./UI/Button";
import img from "@/assets/images/thumbnail-project-1-large.webp";
const data = [
  {
    id: 1,
    src: "./src/assets/images/thumbnail-project-1-large.webp",
    title: "Design Portfolio",
    stacks: ["HTML", "CSS"],
  },
  //   {
  //     id: 2,
  //     src: "../assets/images/thumbnail-project-2-large.webp",
  //     title: "E-learning landing page",
  //     stacks: ["HTML", "CSS"],
  //   },
  //   {
  //     id: 3,
  //     src: "../assets/images/thumbnail-project-3-large.webp",
  //     title: "Todo web app",
  //     stacks: ["HTML", "CSS", "Javascript"],
  //   },
  //   {
  //     id: 4,
  //     src: "../assets/images/thumbnail-project-4-large.webp",
  //     title: "Entertainment",
  //     stacks: ["HTML", "CSS", "Javascript"],
  //   },
  //   {
  //     id: 5,
  //     src: "../assets/images/thumbnail-project-5-large.webp",
  //     title: "Memory game",
  //     stacks: ["HTML", "CSS", "Javascript"],
  //   },
  //   {
  //     id: 6,
  //     src: "../assets/images/thumbnail-project-6-large.webp",
  //     title: "Art Gallery showcase",
  //     stacks: ["HTML", "CSS", "Javascript"],
  //   },
];
export default function Projects() {
  console.log(img);
  return (
    <section>
      <header>
        <h2>Projects</h2>
        <Button text="Contact Me" link="#" />
      </header>
      {data.map((d) => {
        console.log("require(`${d.src}`)");
        return (
          <div key={d.id}>
            {/* <CardImage src={d.src} title={d.title} stacks={d.stacks} /> */}
            {/* <img src={require(d.src)} /> */}
          </div>
        );
      })}
    </section>
  );
}

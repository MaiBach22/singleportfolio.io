import React from "react";
import CardImage from "./CardImage";
import Button from "./UI/Button";
import "../styles/projects.scss";
import img1 from "@/assets/images/thumbnail-project-1-large.webp";
import img2 from "@/assets/images/thumbnail-project-2-large.webp";
import img3 from "@/assets/images/thumbnail-project-3-large.webp";
import img4 from "@/assets/images/thumbnail-project-4-large.webp";
import img5 from "@/assets/images/thumbnail-project-5-large.webp";
import img6 from "@/assets/images/thumbnail-project-6-large.webp";

const data = [
  {
    id: 1,
    src: img1,
    title: "Design Portfolio",
    stacks: ["HTML", "CSS"],
  },
  {
    id: 2,
    src: img2,
    title: "E-learning landing page",
    stacks: ["HTML", "CSS"],
  },
  {
    id: 3,
    src: img3,
    title: "Todo web app",
    stacks: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    src: img4,
    title: "Entertainment",
    stacks: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    src: img5,
    title: "Memory game",
    stacks: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    src: img6,
    title: "Art Gallery showcase",
    stacks: ["HTML", "CSS", "Javascript"],
  },
];
export default function Projects({ width }) {
  return (
    <section className="section_projects">
      <header>
        <h2>Projects</h2>
        <Button text="Contact Me" link="#" />
      </header>
      <div className="projects">
        {data.map((d) => {
          return (
            <CardImage
              src={d.src}
              key={d.id}
              title={d.title}
              stacks={d.stacks}
              width={width}
            />
          );
        })}
      </div>
    </section>
  );
}

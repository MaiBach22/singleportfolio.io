import React, { useEffect, useState } from "react";
import Button from "./UI/Button";
import profile from "../assets/images/image-profile-desktop.webp";
import profile_mobile from "../assets/images/image-profile-mobile.webp";
import circle from "../assets/images/pattern-circle.svg";
import "../styles/hero.scss";
export default function Hero({ width }) {
  // const [width, setWidth] = useState(0);
  // console.log(width);
  // const handleResize = () => setWidth(window.innerWidth);
  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <section className="section_hero">
      <header>
        {width <= 768 && width >= 593 ? (
          <h2>
            Nice to <br />
            meet you! I'm <span>Adam Keyes.</span>
          </h2>
        ) : width < 593 ? (
          <h2>
            Nice to meet you!
            <br />
            I'm <span>Adam Keyes.</span>
          </h2>
        ) : (
          <h2>
            Nice to meet you! I'm <span>Adam Keyes.</span>
          </h2>
        )}

        <p>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <Button text="Contact me" link="#contact" />
      </header>

      {width <= 768 && width >= 593 ? (
        <img className="profilepic" src={profile} alt="profile adam picture" />
      ) : width < 593 ? (
        <img
          className="profilepic"
          src={profile_mobile}
          alt="profile adam picture"
        />
      ) : (
        <img className="profilepic" src={profile} alt="profile adam picture" />
      )}

      {/* <img className="profilepic" src={profile} alt="profile adam picture" /> */}
      <img className="circle" src={circle} alt="circle" />
    </section>
  );
}

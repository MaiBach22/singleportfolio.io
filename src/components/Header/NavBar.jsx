import React from "react";
import Github from "../../assets/Github";
import LinkedIn from "../../assets/Linkedin";
import Slack from "../../assets/Slack";
import Twitter from "../../assets/Twitter";
import "../../styles/header.scss";
export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <a href="#" aria-label="logo">
          <h1>adamkeyes</h1>
        </a>
      </div>
      <div className="social">
        <Github />
        <Slack />
        <LinkedIn />
        <Twitter />
      </div>
    </nav>
  );
}

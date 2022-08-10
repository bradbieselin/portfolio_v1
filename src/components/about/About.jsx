import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Entry level</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>Flatiron School - Bootcamp</small>
              <br></br>
              <small>B.S. Computer Science</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>

          <p>
            Hello! My name is Brad Bieselin and I am a graduate of Flatiron
            School's Software Engineering program, as well as a graduate of the
            University at Albany, SUNY with a B.S. in Computer Science. I design
            user interfaces with React.js, build REST APIs that serve data to my
            React frontends, and complete database migrations with Ruby on Rails
            and ActiveRecord while incorporating many other technologies. I
            decided to pursue web development when I was introduced to it by a
            friend. The freedom to show my creativity is a big pull to the
            developer world. I have experience with art and design, which I find
            especially useful when designing an aesthetically pleasing
            application. I have previous professional experience in project
            management and software quality engineering.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

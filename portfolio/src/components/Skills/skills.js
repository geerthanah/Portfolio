import React from "react";
import "./skills.css";
import java from "../../assets/java.png";
import web from "../../assets/html.png";
import ML from "../../assets/ML.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        An undergraduate student studying software engineering is proficient in
        Python and Java programming languages and is knowledgeable with agile
        and scrum methodologies. They exhibit excellent communication, teamwork,
        and time management skills in addition to excelling in problem-solving,
        algorithm design, and debugging.{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={web} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              I am a skillful web developer proficient in various web
              technologies and frameworks
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={java} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java Programming</h2>
            <p>
              I am a Java programmer with a growing proficiency in Java
              programming concepts.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ML} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Machine Learning</h2>
            <p>
              I am a machine learning enthusiast, eager to delve deeper and
              proficient in fundamental concepts of machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

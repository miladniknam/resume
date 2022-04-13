import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";

class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="secund" id="aboutsection">
        <div>
          <h2>{data.sections[0].title}</h2>
          {Object.keys(data.sections[0].items).map((key) => {
            return <p>{data.sections[0].items[key].content}</p>;
          })}
        </div>
      </Fullpage>
    );
  }
}

export default AboutSection;

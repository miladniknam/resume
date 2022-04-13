import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";

class SkillSection extends Component {
  render() {
    return (
      <Fullpage className="third" id="skillsection">
        <div>
          <h2>{data.sections[1].title}</h2>
          <div>
            {Object.keys(data.sections[1].items).map((key) => {
              return (
                <div className="card">
                  <i class={data.sections[1].items[key].content.icon}></i>
                  <h5>{data.sections[1].items[key].content.title}</h5>
                  <p>{data.sections[1].items[key].content.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Fullpage>
    );
  }
}

export default SkillSection;

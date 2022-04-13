import React, { Component } from "react";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage";

class HeaderNameSection extends Component {
  render() {
    return (
      <Fullpage className="first" id="namesection">
        <div>
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
          {Object.keys(data.links).map((key) => {
            return (
              <SocialIcon
                className="social-icon"
                style={{ borderRadius: 10 }}
                network={key}
                url={data.links[key]}
              />
            );
          })}
        </div>
      </Fullpage>
    );
  }
}

export default HeaderNameSection;

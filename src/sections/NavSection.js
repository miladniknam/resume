import React, { Component } from "react";

class NavSection extends Component {
  render() {
    return (
      <div className="navigation">
        <a href="#namesection">who am i</a>
        <a href="#aboutsection">about me</a>
        <a href="#skillsection">my skills</a>
      </div>
    );
  }
}

export default NavSection;

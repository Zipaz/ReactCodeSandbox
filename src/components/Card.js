import React from "react";
import "../AppStyles.css";
import { colorGen, skillGen } from "../utils/Helpers";
export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color ? props.color : colorGen(),
      skills: props.skills ? props.skills : skillGen()
    };
  }

  componentDidMount() {
    this.getPersonDetails();
  }

  getPersonDetails = () => {
    if (!this.props.person) {
      fetch("https://randomuser.me/api/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ person: res.results[0] });
        });
    } else {
      this.setState({ person: this.props.person });
    }
  };

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.state.person);
      this.getPersonDetails();
      this.setState({
        color: colorGen(),
        skills: skillGen()
      });
    } else {
      alert("GREAT CHOICE!");
    }
  };

  render() {
    return (
      <div className="cards" style={{ backgroundColor: this.state.color }}>
        <div className="card-container">
          <h1 className="nameCol center">
            {this.state.person &&
              this.state.person.name.first + " " + this.state.person.name.last}
          </h1>
          <div className="imgCol center">
            {this.state.person && (
              <img src={this.state.person.picture.large} alt="User" />
            )}
          </div>

          <div className="skillsCol center">
            <span style={{ textDecoration: "underline" }}>Skills</span>
            {this.state.skills.map(skill => {
              return (
                <li style={{ listStyleType: "none" }} key={skill}>
                  {skill}
                </li>
              );
            })}
          </div>
          <div className="center nameCol">
            <button
              className={this.props.onHover ? "nameCol swapName" : "nameCol"}
              style={{
                width: "max-content",
                justifySelf: "center",
                alignSelf: "center"
              }}
              onClick={() => this.handleClick()}
            >
              <span>Select Candidate</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

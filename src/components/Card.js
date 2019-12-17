import React from "react";
import "../AppStyles.css";
export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color
    };
  }

  componentDidMount() {
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
  }

  render() {
    return (
      <div className="cards" style={{ backgroundColor: this.state.color }}>
        {this.state.person &&
          this.state.person.name.first + " " + this.state.person.name.last}
        {this.state.person && <img src={this.state.person.picture.large} />}
      </div>
    );
  }
}

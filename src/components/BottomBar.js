import React from "react";

export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: this.props.candidateList
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.state.candidates.length !== this.props.candidateList.length) {
      this.setState({ candidates: this.props.candidateList });
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: "magenta" }}>
        {this.state.candidates.map(candidate => {
          return <span>{candidate.name.first}</span>;
        })}
      </div>
    );
  }
}

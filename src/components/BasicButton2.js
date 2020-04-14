import React from "react";
import "../styles/basicButton.css";

class BasicButton2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className="basicBtn2"
        type="button"
        value={this.props.view}
        onClick={this.props.action}
      />
    );
  }
}

export default BasicButton2;

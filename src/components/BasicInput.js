import React from "react";

class BasicInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input type="text" placeholder={this.props.guideTxt} />;
  }
}

export default BasicInput;

"use strict";

import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer style={{ width: "100%", margin: "0 auto" }}>
        <div className="F1" style={{ borderTop: "1px solid #000" }}>
          <div className="F1A" style={{ padding: "5px 10px" }}>
            <h1 style={{ fontSize: "22px" }}>contact us:</h1>
            <br />
            <p style={{ fontSize: "16px" }}>
              email@domain.com \n +1 000-000-0000
            </p>
          </div>
          <div className="F2">
            <h4 style={{ fontColor: "grey" }}>All Right Reserved</h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

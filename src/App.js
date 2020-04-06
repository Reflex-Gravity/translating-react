import React from "react";
import Translate from "./utilities/translator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    };
    this.handleLangChange = this.handleLangChange.bind(this);
  }

  handleLangChange(evt) {
    this.setState({ lang: evt.target.value });
  }

  render() {
    return (
      <div className="flex">
        <div style={{ marginBottom: "50px" }}>
          <select value={this.state.lang} onChange={this.handleLangChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <div>
          <Translate lang={this.state.lang}>Search</Translate>
        </div>
      </div>
    );
  }
}

export default App;

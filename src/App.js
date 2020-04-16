import React from "react";
import Translate from "./utilities/translator";
import "./styles.css";

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
        <h1>React Translator</h1>
        <p>Try changing the language from the dropdown.</p>
        <div style={{ marginBottom: "50px" }}>
          <label>Language: </label>
          <select value={this.state.lang} onChange={this.handleLangChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <p style={{ borderBottom: 1 }}>
          <b>Different examples of the translated text:</b>
        </p>
        <ol>
          <li>
            <label style={{ marginRight: 10 }}>Plain text:</label>
            <Translate lang={this.state.lang}>Search</Translate>
          </li>
          <li>
            <label>Inside an html tag:</label>
            <h4>
              <Translate lang={this.state.lang}>conversation</Translate>
            </h4>
          </li>
        </ol>
      </div>
    );
  }
}

export default App;

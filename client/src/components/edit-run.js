import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EditRun extends Component {
  constructor(props) {
    super(props);

    this.onChangeRunLength = this.onChangeRunLength.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      runLength: "",
      date: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://therunbuddy.herokuapp.com/runs/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          runLength: response.data.runLength,
          date: response.data.date,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeRunLength(e) {
    this.setState({
      runLength: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const run = {
      username: this.state.username,
      runLength: this.state.runLength,
      date: this.state.date,
    };
    console.log(run);

    // Skickar löpning
    axios
      .post(
        "https://therunbuddy.herokuapp.com/runs/update/" + this.props.match.params.id,
        run
      )
      .then((res) => {console.log(res.data) 
         // omdirigerar till startsida
         window.location = "/";
     } );
 
  }

  render() {
    return (
      <div>
        <h2>Ändra löprunda</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Namn: </label>
            <p
              ref="userInput"
              required
              className="form-control-lg"
              value={this.state.username}
            >
              {this.state.username}
            </p>
          </div>
          <div className="form-group">
            <label>Längd (km): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.runLength}
              onChange={this.onChangeRunLength}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Spara" className="btn btn-success" />
            &nbsp;
            <Link to="/" className="btn btn-dark">
              Tillbaka
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

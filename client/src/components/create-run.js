import React, { Component } from "react";
import axios from "axios";

export default class CreateRun extends Component {
  constructor(props) {
    super(props);

   
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeRunLength = this.onChangeRunLength.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      runLength: "",
      date: new Date(),
      users: [],
    };
  }

 

  // Förbereder för inputs | Referar till klassen
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeRunLength(e) {
    this.setState({
      runLength: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: new Date(),
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


    axios
      .post("https://therunbuddy.herokuapp.com/runs/add", run)
      .then((res) => {console.log(res.data)
          //omdirigerar 
          window.location = "/";
      });
      
      // Tömmer fälten / Återställer
    this.setState({
      username: "",
      runLength: 0,
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>Lägg till ny löprunda</h2>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Namn: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
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
            <input type="submit" value="Skapa" className="btn btn-success" />
          </div>
        </form>
      </div>
    );
  }
}

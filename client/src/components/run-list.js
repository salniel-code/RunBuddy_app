import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


// React component
const Run = (props) => (
  <tr>
    <td>{props.run.username}</td>
    <td>{props.run.runLength}</td>
    <td>{props.run.date.substring(0, 10)}</td>
    <td className="buttons-change">
      <Link className="btn btn-primary" to={"/uppdatera/" + props.run._id}>
        Uppdatera
      </Link>
      &nbsp;
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteRun(props.run._id);
        }}
      >
        Radera
      </button>
    </td>
  </tr>
);

// Klass component
export default class RunsList extends Component {
  constructor(props) {
    super(props);

    this.deleteRun = this.deleteRun.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.state = { runs: [], dropdownVal: "date" };
  }
  componentDidMount() {
    axios
      .get("https://therunbuddy.herokuapp.com/runs/")
      .then((response) => {
        this.setState({ runs: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteRun(id) {
    axios
      .delete("https://therunbuddy.herokuapp.com/runs/" + id)
      .then((response) => console.log(response.data));
    this.setState({
      runs: this.state.runs.filter((obj) => obj._id !== id),
    });
  }

  onChangeDropdown(e) {
    this.setState({ dropdownVal: e.target.value });
  }

  runList() {
    if (this.state.dropdownVal === "date") {
      return this.state.runs
        .sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
        .map((therun) => {
          // component returneras
          return (
            <Run run={therun} deleteRun={this.deleteRun} key={therun._id} />
          );
        });
    } else if (this.state.dropdownVal === "length") {
      return this.state.runs
        .sort((a, b) => {
          return a.runLength > b.runLength ? 1 : -1;
        })
        .map((therun) => {
          // React component returneras
          return (
            <Run run={therun} deleteRun={this.deleteRun} key={therun._id} />
          );
        });
    }
  }

  render() {
    return (
      <div className="runlist-container">
        <h3>Löpningslista</h3>

        <div className="form-group">
          <label>Sortera efter:</label>
          <select
            className="form-control"
            defaultValue={this.state.dropdownVal}
            onChange={this.onChangeDropdown}
          >
            <option value="date">Datum (nyast till äldst)</option>
            <option value="length">Längd (topplista)</option>
          </select>
        </div>
        <table className="ta">
          <thead className="thead-light">
            <tr>
              <th>Namn</th>
              <th>Längd (km)</th>
              <th>Datum</th>
              <th>Ändra/Ta bort</th>
            </tr>
          </thead>
          <tbody id="runlist" className={"sorted-by-"+this.state.dropdownVal}>{this.runList().reverse()}</tbody>
        </table>
      </div>
    );
  }
}

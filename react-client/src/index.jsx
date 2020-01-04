import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: "",
      bedOrSuit: "",
      fromDate: "",
      toDate: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.idChange = this.idChange.bind(this);
    this.bedOrSuitChange = this.bedOrSuitChange.bind(this);
    this.fromDateChange = this.fromDateChange.bind(this);
    this.toDateChange = this.toDateChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/insert', this.state)
      .then((res) => {
        console.log(res.config.data);

      })
      .catch((err) => {
        console.log(err);
      })

  }

  nameChange(event) {
    event.preventDefault();

    this.setState({ name: event.target.value })

  }

  idChange(event) {
    event.preventDefault();

    this.setState({ id: event.target.value })

  }
  bedOrSuitChange(event) {
    event.preventDefault();

    this.setState({ bedOrSuit: event.target.value })


  }
  fromDateChange(event) {
    event.preventDefault();

    this.setState({ fromDate: event.target.value })


  }
  toDateChange(event) {
    event.preventDefault();

    this.setState({ toDate: event.target.value })


  }


  render() {
    return (
      <div id="aouiniHotel">
        <h1>Aouini Hotel</h1>
        <div id="HotelData">
          {/* <h1>Item List</h1>
      <List items={this.state.items} /> */}
          <div id="insert">
            <form onSubmit={this.handleSubmit}>
              <h2>insert your reservation</h2>
              <hr></hr>
              <div className="input">
                <label form="name">Full Name:* </label>
                <input type="text" id="fullName" value={this.state.value} onChange={this.nameChange}></input>
              </div>
              <br></br>
              <div className="input">
                <label form="id">ID:* </label>
                <input type="text" id="id" value={this.state.value} onChange={this.idChange}></input>
              </div>
              <br></br>
              <div className="input">
                <label form="Nbeds">bed/suit:* </label>
                <input type="text" id="bedNumbers" name="bedOrSuit" value={this.state.value} onChange={this.bedOrSuitChange}></input>
              </div>
              <br></br>
              <div className="input">
                <label form="date">from date:* </label>
                <input type="text" id="fromDate" name="from" value={this.state.value} onChange={this.fromDateChange}></input>
                <br></br>
              </div>
              <br></br>
              <div className="input">
                <label form="date">to date:* </label>
                <input type="text" id="toDate" name="to" value={this.state.value} onChange={this.toDateChange}></input>
              </div>
              <br></br>
              <button type="submite" id="subm">submite</button>
            </form>
          </div>

        </div>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
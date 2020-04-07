import React from "react";
import "./Users.js";
import "./App.css";
import Header from "./Header";
import Users from "./Users.js";
import axios from "axios";
import schedule from "node-schedule";
const users = ["Leeshin Liskyn", "Rone Dahl", "IWILLNUT", "HercuLATS"];
const cont = true;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valArray: [], rollerArray: [] };
  }

  componentDidMount(){
    this.refreshFeed()
    setInterval(() => {
      this.refreshFeed()
    }, 5000);
  }

  refreshFeed = () => {
    axios
      .post("https://pure-mountain-12737.herokuapp.com/refreshData")
      .then((res) => {
        let rollerArray = [];
        let valArray = [];
        console.log(res)
        for (var i = res.data.length - 1; i >= 0; i--) {
          rollerArray.push(res.data[i].roller);
          valArray.push(res.data[i].val);
        }
        console.log(valArray, rollerArray);

        this.setState((prevState) => ({
          valArray,
          rollerArray,
        }));
      });
  };

  getRandom = async (val = 0, roller = "_") => {
    //const babyObj = { roller, randomVal };
    let randomVal = Math.floor(Math.random() * val) + 1;
    axios
      .post("https://pure-mountain-12737.herokuapp.com/sendData", {
        val: randomVal,
        roller,
      })
      .then((res) => {
        let rollerArray = [];
        let valArray = [];
        for (var i = res.data.length - 1; i >= 0; i--) {
          rollerArray.push(res.data[i].roller);
          valArray.push(res.data[i].val);
        }
        console.log(valArray, rollerArray);

        this.setState((prevState) => ({
          valArray,
          rollerArray,
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <div id="contains-users">
            {users.map((user) => (
              <Users random={this.getRandom} user={user}></Users>
            ))}
          </div>
          <div>
            {this.state.rollerArray.map((roller, iteration) => (
              <div className="row justify-content-center">
                <p className="col-md-12" id="roll-history">
                  <p id="rollVal">{roller}: </p>
                  <p id="rollRoller"> {this.state.valArray[iteration]}</p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

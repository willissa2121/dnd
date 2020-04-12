import React from "react";
import "./Users.js";
import "./App.css";
import Header from "./Header";
import Users from "./Users.js";
import axios from "axios";
const users = [{userName:"Leeshin Liskyn", picture:"dragon"}, {userName:"Rone Dahl", picture:"necromancer"}, {userName:"IWILLNUT", picture:"midget"}, {userName:"HercuLATS", picture:"cat"}];
const cont = true;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valArray: [], rollerArray: [], recentRoll: {} };
  }

  componentDidMount() {
    this.refreshFeed();
    setInterval(() => {
      this.refreshFeed();
    }, 2000);
  }

  refreshFeed = () => {
    axios
      .post("https://secure-sea-78493.herokuapp.com/refreshData")
      .then((res) => {
        let rollerArray = [];
        let valArray = [];
        //console.log(res);
        for (var i = res.data.length - 1; i >= 0; i--) {
          if (res.data[i].roller === "_") {
          } else {
            rollerArray.push(res.data[i].roller);
            valArray.push(res.data[i].val);
          }
        }
        //console.log(valArray, rollerArray);
        let recentRoll = { roller: rollerArray[0], val: valArray[0] };
        this.setState((prevState) => ({
          valArray,
          rollerArray,
          recentRoll
        }));
      });
  };

  getRandom = async (val = 0, roller = "_") => {
    //const babyObj = { roller, randomVal };
    let randomVal = Math.floor(Math.random() * val) + 1;
    axios
      .post("https://secure-sea-78493.herokuapp.com/sendData", {
        val: randomVal,
        roller,
      })
      .then((res) => {
        let rollerArray = [];
        let valArray = [];
        for (var i = res.data.length - 1; i >= 0; i--) {
          if (res.data[i].roller === "_") {
          } else {
            rollerArray.push(res.data[i].roller);
            valArray.push(res.data[i].val);
          }
        }
        let recentRoll = { roller: rollerArray[0], val: valArray[0] };
        console.log(valArray, rollerArray);

        this.setState((prevState) => ({
          valArray,
          rollerArray,
          recentRoll
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Header recentRoll={this.state.recentRoll}></Header>
        <div className="container-fluid">
          <div className="row" id="contains-users">
            {users.map((user) => (
              <div className="col-md-3">
                <Users random={this.getRandom} image={user.picture} user={user.userName}></Users>
              </div>
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

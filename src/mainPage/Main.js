import React from "react";
import "./Users.js";
import "./Main.css";
import Header from "./Header";
import Users from "./Users.js";
import axios from "axios";
import config from "../config/config";
const users = [
  { userName: "Leeshin Liskyn", picture: "dragon" },
  { userName: "Rone Dahl", picture: "necromancer" },
  { userName: "IWILLNUT", picture: "midget" },
  { userName: "HercuLATS", picture: "cat" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rollDataArray: [],
      valArray: [],
      rollerArray: [],
      recentRoll: {},
      updateRoller: true,
    };
  }

  componentDidMount() {
    //this.refreshFeed();
    setInterval(() => {
      this.refreshFeed();
    }, 250);
  }

  handleData = (res, saveRecent) => {
    let rollDataArray = [];
    for (var i = res.data.length - 1; i >= 0; i--) {
      const { roller, val, createdAt } = res.data[i];
      let currentEntryObject = {
        roller,
        val,
        createdAt,
      };
      rollDataArray.push(currentEntryObject);
    }
    const { roller, val, createdAt } = rollDataArray[0];
    let recentRoll = {
      roller,
      val,
      createdAt,
    };

    if (recentRoll.createdAt === this.state.recentRoll.createdAt) {
      this.setState({ updateRoller: false });
    } else {
      this.setState({ updateRoller: true });
    }
    if (saveRecent) {
      this.setState((prevState) => ({
        rollDataArray,
        recentRoll,
      }));
    } else {
      this.setState((prevState) => ({
        rollDataArray,
      }));
    }
  };

  refreshFeed = () => {
    axios.post(`${config.prod}/refreshData`).then((res) => {
      this.handleData(res, true);
    });
  };

  getRandom = async (val, roller) => {
    let randomVal = Math.floor(Math.random() * val) + 1;
    axios
      .post(`${config.prod}/sendData`, {
        val: randomVal,
        roller,
      })
      .then((res) => {
        this.handleData(res, false);
      });
  };

  render() {
    return (
      <div className="App">
        <Header
          update={this.state.updateRoller}
          recentRoll={this.state.recentRoll}
        ></Header>
        <div className="container-fluid">
          <div className="row" id="contains-users">
            {users.map((user) => (
              <div className="col-md-3">
                <Users
                  data={this.state.rollDataArray}
                  random={this.getRandom}
                  image={user.picture}
                  user={user.userName}
                ></Users>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./Users.js";
import "./Main.css";
import Header from "./Header";
import Users from "./Users.js";
import axios from "axios";

const users = [
  {
    userName: "Leeshin Liskyn",
    picture: "dragon",
    stats: { str: 5, dex: 4, con: 3, wis: 3, int: 3, char: 2 },
  },
  {
    userName: "Rone Dahl",
    picture: "necromancer",
    stats: { str: 0, dex: 3, con: 2, wis: 2, int: 4, char: 2 },
  },
  { userName: "IWILLNUT", picture: "midget" },
  {
    userName: "HercuLATS",
    picture: "cat",
    stats: { str: 1, dex: 4, con: 1, wis: 1, int: 2, char: 3 },
  },
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
      currentModValue: 0,
      currentModClass: "",
      previousNat20: "",
      previousNat1: "",
    };
  }

  componentDidMount() {
    this.refreshFeed();
    setInterval(() => {
      this.refreshFeed();
    }, 200);
  }

  handleData = (res, saveRecent) => {
    let rollDataArray = [];
    let previousNat20, previousNat1;

    for (var i = res.data.length - 1; i >= 0; i--) {
      const {
        roller,
        val,
        maxRoll,
        modifierValue,
        modifierClass,
        createdAt,
      } = res.data[i];
      let currentEntryObject = {
        roller,
        val,
        maxRoll,
        modifierClass,
        modifierValue,
        createdAt,
      };
      rollDataArray.push(currentEntryObject);
    }

    for (var t = 0; t < res.data.length; t++) {
      const { roller, val, maxRoll } = res.data[t];
      if (val === 1 && maxRoll === 20) {
        previousNat1 = roller;
      } else if (val === 20) {
        previousNat20 = roller;
      }
    }
    console.log(previousNat1, previousNat20);
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
        previousNat1,
        previousNat20,
      }));
    } else {
      this.setState((prevState) => ({
        rollDataArray,
        previousNat1,
        previousNat20,
      }));
    }
  };

  refreshFeed = () => {
    axios
      .post(`https://dnd-server-api.herokuapp.com/refreshData`)
      .then((res) => {
        this.handleData(res, true);
      });
  };

  getRandom = async (val, roller) => {
    const maxRoll = val;
    let randomVal = Math.floor(Math.random() * val) + 1;
    axios
      .post(`https://dnd-server-api.herokuapp.com/sendData`, {
        val: randomVal,
        roller,
        maxRoll,
        modifierValue: this.state.currentModValue,
        modifierClass: this.state.currentModClass,
      })
      .then((res) => {
        this.handleData(res, false);
      });
  };

  handleChange = (event) => {
    let val = event.target.value;
    let [userWithMod, modifierClass] = val.split(":");

    users.map((user) => {
      if (user.userName === userWithMod) {
        if (modifierClass === 0) {
          this.setState({
            currentModValue: 0,
            currentModClass: "none",
          });
        } else {
          let modifierValue = user.stats[modifierClass];
          this.setState({
            currentModValue: modifierValue,
            currentModClass: modifierClass,
          });
        }
      }
    });

    console.log(this.state.currentModClass, this.state.currentModValue);
  };

  render() {
    return (
      <div className="App">
        <Header
          previousNat1={this.state.previousNat1}
          previousNat20={this.state.previousNat20}
          update={this.state.updateRoller}
          recentRoll={this.state.recentRoll}
        ></Header>
        <div className="container-fluid">
          <div className="row" id="contains-users">
            {users.map((user) => (
              <div className="col-md-3">
                <Users
                  handleChange={this.handleChange}
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

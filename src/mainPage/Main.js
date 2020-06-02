import React from "react";
import "./Users.js";
import "./Main.css";
import Header from "./Header";
import Users from "./Users.js";
import axios from "axios";

const users = [
  {
    userName: "BOYBERRY",
    picture: "dragon",
    stats: { prof: 2, none: 0 },
    mods: { STR: 0, DEX: 1, CON: 3, INT: 0, WIS: 3, CHAR: 1, none: 0 },
  },
  {
    userName: "BJORN",
    picture: "necromancer",
    stats: { prof: 2, none: 0 },
    mods: { STR: 1, DEX: 2, CON: 2, INT: 0, WIS: 4, CHAR: 1, none: 0 },
  },
  {
    userName: "IWILLNUT",
    picture: "midget",
    stats: { prof: 3, none: 0 },
    mods: { STR: 3, DEX: 1, CON: 4, INT: 1, WIS: 1, CHAR: 3, none: 0 },
  },
  {
    userName: "HerMak",
    picture: "cat",
    stats: { prof: 2, none: 0 },
    mods: { STR: 0, DEX: 2, CON: 2, INT: 1, WIS: 2, CHAR: 4, none: 0 },
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
      currentProfValue: 0,
      modValue: 0,
      modClass: "none",
      previousNat20: "",
      previousNat1: "",
      playerHealth: {
        BOYBERRY: 26,
        Rone: 25,
        IWILLNUT: 50,
        HerMak: 24,
      },

      updatingHealth: false,
    };
  }

  componentDidMount() {
    this.refreshFeed();
    setInterval(() => {
      this.refreshFeed();
    }, 200);
    setInterval(() => {
      this.refreshHealth();
    }, 3500);
  }

  handleHealthChange = (e) => {
    const dupeHealthObject = this.state.playerHealth;
    dupeHealthObject[e.target.name] = Number(e.target.value);
    console.log(dupeHealthObject);
    this.setState({ playerHealth: dupeHealthObject });
    console.log(this.state.playerHealth);
  };

  submitHealth = (e) => {
    console.log(e.target.name, this.state.playerHealth[e.target.name]);

    axios
      .post("https://dnd-server-api.herokuapp.com/sendHealth", {
        char: e.target.name,
        health: this.state.playerHealth[e.target.name],
      })
      .then((res) => {
        let dupeObj = this.state.playerHealth;
        for (var i = 0; i < res.data.length; i++) {
          dupeObj[res.data[i]] = res.data[i].health;
        }
        this.setState({ playerHealth: dupeObj });
      });
  };

  refreshHealth = () => {
    axios
      .post("https://dnd-server-api.herokuapp.com/refreshHealth")
      .then((data) => {
        let dupeObj = this.state.playerHealth;
        console.log(data.data);
        for (var i = 0; i < data.data.length; i++) {
          dupeObj[data.data[i].char] = data.data[i].health;
        }
        this.setState({ playerHealth: dupeObj });
      });
  };

  handleData = (res, saveRecent) => {
    let rollDataArray = [];
    let previousNat20, previousNat1;
    for (var i = res.data.length - 1; i >= 0; i--) {
      const {
        roller,
        val,
        maxRoll,
        profValue,
        modValue,
        modClass,
        createdAt,
      } = res.data[i];
      let currentEntryObject = {
        roller,
        val,
        maxRoll,
        profValue,
        modValue,
        modClass,
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
        profValue: this.state.currentProfValue,
        modValue: this.state.modValue,
        modClass: this.state.modClass,
      })
      .then((res) => {
        this.handleData(res, false);
      });
  };

  handleChange = (event) => {
    let val = event.target.value;
    let [userWithProf, profValue] = val.split(":");

    users.map((user) => {
      if (user.userName === userWithProf) {
        let modifierValue = user.stats[profValue];
        this.setState({
          currentProfValue: modifierValue,
        });
      }
    });
  };

  handleModChange = (e) => {
    const [currentUser, modClass] = e.target.value.split(":");
    users.map((user) => {
      if (currentUser === user.userName) {
        this.setState({ modValue: user.mods[modClass], modClass });
      }
    });
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
                  submitHealth={this.submitHealth}
                  playerHealth={this.state.playerHealth}
                  handleHealthChange={this.handleHealthChange}
                  handleModChange={this.handleModChange}
                  handleChange={this.handleChange}
                  data={this.state.rollDataArray}
                  random={this.getRandom}
                  image={user.picture}
                  user={user.userName}
                  updatingHealth={this.state.updatingHealth}
                  updateHealth={this.updateHealth}
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

import React from "react"
import "./Users.js"
import "./Main.css"
import Header from "./Header"
import Users from "./Users.js"
import axios from "axios"

const users = [
  {
    userName: "Leeshin Liskyn",
    picture: "dragon",
    stats: { str: 5, dex: 4, con: 3, wis: 3, int: 3, char: 2 }
  },
  {
    userName: "Rone Dahl",
    picture: "necromancer",
    stats: { str: 0, dex: 3, con: 2, wis: 2, int: 4, char: 2 }
  },
  { userName: "IWILLNUT", picture: "midget" },
  {
    userName: "HercuLATS",
    picture: "cat",
    stats: { str: 1, dex: 4, con: 1, wis: 1, int: 2, char: 3 }
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rollDataArray: [],
      valArray: [],
      rollerArray: [],
      recentRoll: {},
      updateRoller: true,
      currentMod: 0
    }
  }

  componentDidMount() {
    this.refreshFeed()
    setInterval(() => {
      this.refreshFeed()
    }, 250)
  }

  handleData = (res, saveRecent) => {
    let rollDataArray = []
    for (var i = res.data.length - 1; i >= 0; i--) {
      const { roller, val, createdAt } = res.data[i]
      let currentEntryObject = {
        roller,
        val,
        createdAt
      }
      rollDataArray.push(currentEntryObject)
    }
    const { roller, val, createdAt } = rollDataArray[0]
    let recentRoll = {
      roller,
      val,
      createdAt
    }

    if (recentRoll.createdAt === this.state.recentRoll.createdAt) {
      this.setState({ updateRoller: false })
    } else {
      this.setState({ updateRoller: true })
    }
    if (saveRecent) {
      this.setState(prevState => ({
        rollDataArray,
        recentRoll
      }))
    } else {
      this.setState(prevState => ({
        rollDataArray
      }))
    }
  }

  refreshFeed = () => {
    axios.post(`https://dnd-server-api.herokuapp.com/refreshData`).then(res => {
      this.handleData(res, true)
    })
  }

  getRandom = async (val, roller) => {
    let randomVal = Math.floor(Math.random() * val) + 1
    axios
      .post(`https://dnd-server-api.herokuapp.com/sendData`, {
        val: randomVal,
        roller
      })
      .then(res => {
        this.handleData(res, false)
      })
  }

  handleChange = event => {
    let val = event.target.value
    let [userWithMod, modifierClass] = val.split(":")
    users.map(user => {
      if (user.userName === userWithMod) {
        let modifierValue = user.stats[modifierClass]
        this.setState({ currentMod: modifierValue })
      }
    })
    console.log(this.state.currentMod)
  }

  render() {
    return (
      <div className="App">
        <Header
          update={this.state.updateRoller}
          recentRoll={this.state.recentRoll}
        ></Header>
        <div className="container-fluid">
          <div className="row" id="contains-users">
            {users.map(user => (
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
    )
  }
}

export default App

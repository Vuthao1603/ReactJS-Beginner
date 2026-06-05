import React from "react";
import AddUserinfor from "./AddUserinfor";
import Displayinfor from "./Displayinfor";
class Mycomponents extends React.Component {
  //khai bao state

  state = {
    listUser: [
      { id: 1, name: "thao", age: 15 },
      { id: 2, name: "thao1", age: 26 },
      { id: 3, name: "thao2", age: 27 },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log("check data", userObj);
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
  };

  handleclick = (events) => {
    // arrow function de khong bi loi this
    console.log(this.state.name);
    // console.log(events);

    //merge state
    this.setState({
      name: "thao super",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleinMoverover(envents) {
    console.log(envents.pageX);
  }

  handleonchangeinput = (events) => {
    this.setState({
      name: events.target.value,
    });
  };

  hanldOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const myinfor = ["add", "button"];

    return (
      <div>
        My name is {this.state.name}
        and age {this.state.age}
        <button
          onClick={(envents) => {
            this.handleclick(envents);
          }}
        >
          click me
        </button>
        <form onSubmit={(event) => this.hanldOnSubmit(event)}>
          <input
            type="text"
            onChange={(events) => this.handleonchangeinput(events)}
          />
          <button> submit </button>
        </form>
        <AddUserinfor handleAddNewUser={this.handleAddNewUser} />
        <Displayinfor listUser={this.state.listUser} />
      </div>
    );
  }
}

export default Mycomponents;

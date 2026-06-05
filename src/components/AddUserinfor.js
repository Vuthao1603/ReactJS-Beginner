import React from "react";

class AddUserinfor extends React.Component {
  handleonchangeinput = (events) => {
    this.setState({
      name: events.target.value,
    });
  };

  hanldOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        VUVANTHAO
        <form onSubmit={(event) => this.hanldOnSubmit(event)}>
          <input
            type="text"
            onChange={(events) => this.handleonchangeinput(events)}
          />
          <button> submit </button>
        </form>
      </div>
    );
  }
}

export default AddUserinfor;

import React from "react";
import "./displayinfor.scss";

class Displayinfor extends React.Component {
  state = {
    isShowlistuser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowlistuser: !this.state.isShowlistuser,
    });
  };
  render() {
    console.log(this.props);
    //destructuring
    const { listUser } = this.props; //props la object nen co the su dung destructuring de lay ra cac gia tri
    //props

    return (
      <div>
        {listUser.map((user) => {
          return (
            <div className="display-infor-container">
              <div>
                <span
                  onClick={() => {
                    this.handleShowHide();
                  }}
                >
                  {this.state.isShowlistuser === true
                    ? "Hide list user"
                    : "Show list user"}
                </span>
              </div>
              {this.state.isShowlistuser && (
                <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                  <div> My name {user.name}</div>
                  <div> My age {user.age}</div>
                </div>
              )}
            </div>
          );

          // if (+user.age > 20) {
          //   return (
          //     <div key={user.id} className="red">
          //       <div> My name {user.name}</div>
          //       <div> My age {user.age}</div>
          //     </div>
          //   );
          // } else {
          //   return (
          //     <div key={user.id} className="green">
          //       <div> My name {user.name}</div>
          //       <div> My age {user.age}</div>
          //     </div>
          //   );
          // }
        })}
      </div>
    );
  }
}

export default Displayinfor;

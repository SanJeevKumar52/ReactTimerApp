import React from "react";
import TimerOne from "./components/Timer/TimerOne";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      timerOn: false,
    };
  }

  handleTimerOn = () => {
    console.log(this.state.timerOn);
    this.setState((prevState) => ({ timerOn: !prevState.timerOn }));
  };

  render() {
    const appStyle = {
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif",
    };

    return (
      <div style={appStyle}>
        <TimerOne timerOn={this.state.timerOn} />
        <button onClick={this.handleTimerOn}>
          {this.state.timerOn ? "STOP" : "START"}
        </button>
      </div>
    );
  }
}

export default App;

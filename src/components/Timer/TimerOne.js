import React from "react";

class TimerOne extends React.Component {

    constructor() {
        super();

        this.state = {
            time: 0
        }
        this.timer = null;

        console.log("TimerOne constructor")
        console.log('---------------------------------');


    }

    static getDerivedStateFromProps() {
        console.log("TimerOne getDerivedStateFromProps ");

        return null;
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {

        
        console.log("TimerOne render")
        console.log('---------------------------------');
        
        const timerStyle = {
            textAlign: 'center',
            marginTop: '20px',
            fontFamily: 'Arial, sans-serif',
          };

        return (
            <div style={timerStyle}>
                <h1>Time Spent :</h1>
                <h2>{new Date(this.state.time *1000).toISOString().slice(11,19)}</h2>

            </div>
        );
    }

    componentDidMount() {
        console.log("TimerOne componentDidMount ");
        console.log('_____________________________');

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("TimerOne getSnapshotBeforeUpdate ");
        return null;
    }

    componentDidUpdate(prevProps, prevState,snapShort) {
        console.log("TimerOne componentDidUpdate ");
        console.log('_____________________________');

        if(prevProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){

                this.timer = setInterval(() => {
                    this.setState((prevState) => ({ time: prevState.time + 1 }))
                }, 1000);

            }
            else{
                clearInterval(this.timer)
            }
        }

    }

    componentWillUnmount(){
        console.log(" TimeOne ComponentwillupAmount");
        /* clearInterval(this.timer); */
    }

}

export default TimerOne;
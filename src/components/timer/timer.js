import React, { Component} from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "./timer.css";
import { PlayCircleOutlined, PauseCircleOutlined, UndoOutlined } from '@ant-design/icons';
import { fetchNotes, resetTimer, resumeTimer, stopTimer } from '../../redux/firebaseReducer'

class Stopwatch extends Component {
  state = {
    timerOn: this.props.note.startStop[0].stopped,
    timerStart: 0,
    timerTime: this.props.note.startStop[0].stopped ? this.props.note.startStop[0].timerValue : this.props.note.startStop[0].timerValue + Date.now() - this.props.note.startStop[0].date,
    note: this.props.note,
  };


  startTimer = () => {
    this.props.resumeTimer(this.state.note.id)
    setTimeout(()=> {this.props.setNotes()}, 500)
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };


  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
    this.props.SetTimerValue(this.state.note.id, this.state.timerTime)
    setTimeout(()=> {this.props.setNotes()}, 500)
  };

  resetTimer = () => {
    this.props.resetTimer(this.state.note.id)
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
    setTimeout(()=> {this.props.setNotes()}, 500)
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch">
        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds}
        </div>
        <div className="Stopwatch-btns">
          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <PlayCircleOutlined style={{ fontSize: '18px', marginBottom: '1', color: '#000' }} onClick={this.startTimer} />
          )}
          {this.state.timerOn === true && (
            <PauseCircleOutlined style={{ fontSize: '18px', marginLeft: "auto", marginBottom: '1', color: '#000' }} onClick={this.stopTimer} />
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <PlayCircleOutlined style={{ fontSize: '18px', marginBottom: '1', color: '#000' }} onClick={this.startTimer} />
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <UndoOutlined style={{ fontSize: '18px', marginBottom: 1, color: '#000' }} onClick={this.resetTimer} />
          )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    notes: state.fireBaseState.notes
  }
}

export default compose(connect(mapStateToProps, { setNotes: fetchNotes, SetTimerValue: stopTimer, resumeTimer: resumeTimer, resetTimer: resetTimer }))(Stopwatch);
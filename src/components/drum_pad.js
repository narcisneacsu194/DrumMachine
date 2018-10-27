import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLastPressedButton } from '../actions/index';
class DrumPad extends Component{
  constructor(props){
    super(props);

    this.playAudio = this.playAudio.bind(this);
  }

  playAudio(event){
    const url = this.props.url;
    const aud = new Audio(url);
    aud.play();

    this.buttonDOM.blur();
    this.props.setLastPressedButton(this.props.label);
  }

  render(){
      return (
        <div className="drum-pad col-md-4">
          <button id={this.props.letter} onClick={this.playAudio} className="btn btn-default"
          ref={(buttonDOM) => {this.buttonDOM = buttonDOM;}}
          >{this.props.letter}</button>
        </div>
      );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setLastPressedButton }, dispatch);
}

export default connect(null, { setLastPressedButton })(DrumPad)

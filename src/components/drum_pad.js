import React, { Component } from 'react';

class DrumPad extends Component{
  constructor(props){
    super(props);

    this.playAudio = this.playAudio.bind(this);
  }

  playAudio(){
    const url = this.props.url;
    const aud = new Audio(url);
    aud.play();
    this.buttonDOM.blur();
  }

  render(){
      return (
        <div className="drum-pad col-md-4">
          <button onClick={this.playAudio} className="btn btn-default"
          ref={(buttonDOM) => {this.buttonDOM = buttonDOM;}}
          >{this.props.letter}</button>
        </div>
      );
  }
}

export default DrumPad;

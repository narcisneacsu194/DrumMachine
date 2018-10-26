import React, { Component } from 'react';
import DrumPadList from './drum_pad_list';
export default class DrumMachine extends Component{
  render(){
    return (
    <div id="drum-machine" className="container">
      <DrumPadList/>
    </div>);
  }
}

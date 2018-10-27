import React, { Component } from 'react';
import DrumPadList from './drum_pad_list';
import Display from './display';
export default class DrumMachine extends Component{
  render(){
    const variable = 50;
    return (
    <div id="drum-machine" className="container">
    <div className="row">
      <DrumPadList />
      <Display/>
    </div>
    </div>);
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component{
  render(){
    if(!this.props.buttonInfo){
      return (
      <div id="display" className="col-md-6 content-right">
      <div className="row">
        <h6 id="logo" className="text-md-right">DrumMachine</h6>
      </div>
      <div className="row">
        <div id="message">
          Sound
        </div>
      </div>
      </div>);
    }

    return (
      <div id="display" className="col-md-6 content-right">
        <div className="row">
          <h6 id="logo" className="text-md-right">DrumMachine</h6>
        </div>
        <div className="row">
          <div id="message">
            {this.props.buttonInfo}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ buttonInfo }){
  return { buttonInfo };
}

export default connect(mapStateToProps)(Display);

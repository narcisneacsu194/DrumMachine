import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component{
  render(){
    if(!this.props.buttonInfo){
      return (
      <div id="display" className="col-md-6 content-right">
        <div id="message">
          Sound
        </div>
      </div>);
    }

    return (
      <div id="display" className="col-md-6 content-right">
        <div id="message">
          {this.props.buttonInfo}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ buttonInfo }){
  return { buttonInfo };
}

export default connect(mapStateToProps)(Display);

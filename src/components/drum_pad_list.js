import React, { Component } from 'react';
import _ from 'lodash';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLastPressedButton } from '../actions/index';
import DrumPad from './drum_pad';
import { PADS } from '../constants/pads';

class DrumPadList extends Component {
  constructor(props){
    super(props);

    this.playAudio = this.playAudio.bind(this);
  }

  playAudio(key){
    let elem = document.getElementById(key.toUpperCase());
    elem.setAttribute('style',
     'background-color: orange !important; box-shadow: none !important');
    elem.click();
    this.props.setLastPressedButton(PADS[key].label);
  }

  resetButtonCss(key){
    let elem = document.getElementById(key.toUpperCase());
    elem.setAttribute('style', 'background-color: grey box-shadow: 3px 3px 4px #000000');
  }

  render(){
    const drumPadItems = () => {
      return (<div className="row">
  {
      Object.values(PADS)
        .map(padElem => <DrumPad
          letter={padElem.letter}
          url={padElem.url}
          label={padElem.label}
          key={padElem.letter} />)
  }
  </div>);
    };
    return (
      <div className="col-md-6 newRow">
        {drumPadItems()}
        <KeyboardEventHandler handleKeys={['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']}
          onKeyEvent={(key, event) => this.playAudio(key)} handleEventType="keydown"/>
          <KeyboardEventHandler handleKeys={['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']}
            onKeyEvent={(key, event) => this.resetButtonCss(key)} handleEventType="keyup"/>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setLastPressedButton }, dispatch);
}

export default connect(null, { setLastPressedButton })(DrumPadList);

import React, { Component } from 'react';
import _ from 'lodash';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import DrumPad from './drum_pad';
const PADS = {
  q: {
    label: "Heater 1",
    letter: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  w: {
    label: "Heater 2",
    letter: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  e: {
    label: "Heater 3",
    letter: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  a: {
    label: "Heater 4",
    letter: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  s: {
    label: "Clap",
    letter: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  d: {
    label: "Open HH",
    letter: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  z: {
    label: "Kick n' Hat",
    letter: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  x: {
    label: "Kick",
    letter: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  c: {
    label: "Closed HH",
    letter: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
};

class DrumPadList extends Component {

  playAudio(key){
    const url = PADS[key].url;
    const aud = new Audio(url);
    aud.play();
  }

  render(){
    const drumPadItems = _.map(PADS, padElem =>{
        return <li className="list-group-name"><DrumPad letter={padElem.letter} url={padElem.url}/></li>;
    });

    return (
      <div>
        <ul className="list-group">
          {drumPadItems}
        </ul>
        <KeyboardEventHandler
        handleKeys={['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']}
        onKeyEvent={(key, e) => this.playAudio(key)} />
      </div>
    );
  }
};

export default DrumPadList;

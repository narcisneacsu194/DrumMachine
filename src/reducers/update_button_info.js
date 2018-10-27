import { UPDATE_BUTTON_INFO } from '../actions';

export default function(state = "", action){
  switch(action.type){
    case UPDATE_BUTTON_INFO:
      return action.payload;
  }

  return state;
}

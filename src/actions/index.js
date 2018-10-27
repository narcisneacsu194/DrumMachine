export const UPDATE_BUTTON_INFO = 'UPDATE_BUTTON_INFO';

export function setLastPressedButton(buttonInfo){
  return {
    type: UPDATE_BUTTON_INFO,
    payload: buttonInfo
  };
}

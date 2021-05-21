// === action types
export const UPDATE_INPUT_NAME = 'UPDATE_INPUT_NAME';
export const UPDATE_INPUT_MAIL = 'UPDATE_INPUT_MAIL';
export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';
export const CLEAR_INPUTS_ON_SUBMIT = 'CLEAR_INPUTS_ON_SUBMIT';

// === action creators
export const updateInputName = (inputName) => ({
  type: UPDATE_INPUT_NAME,
  inputName,
});

export const updateInputMail = (inputMail) => ({
  type: UPDATE_INPUT_MAIL,
  inputMail,
});

export const updateInputMessage = (inputMessage) => ({
  type: UPDATE_INPUT_MESSAGE,
  inputMessage,
});

export const clearInputsOnSubmit = () => ({
  type: CLEAR_INPUTS_ON_SUBMIT,
});

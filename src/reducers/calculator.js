import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  mode: '+',
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  // 計算は今押したボタンではなく、前回押したボタンで行う
  const result = (() => {
    if(state.mode === '+'){
      return state.resultValue + state.inputValue
    }else if(state.mode === '-'){
      return state.resultValue - state.inputValue
    }else if(state.mode === '*'){
      return state.resultValue * state.inputValue
    }else if(state.mode === '/'){
      return state.resultValue / state.inputValue
    }else if(state.mode === '='){
      return state.inputValue
    }
  })();
  if (action.type === actionTypes.INPUT_NUMBER) {
    return {
      ...state,
      inputValue: state.inputValue * 10 + action.number,
      showingResult: false,
    };
  } else if (action.type === actionTypes.PLUS) {
    return {
      ...state,
      inputValue: 0,
      resultValue: result,
      mode:'+',
      showingResult: true,
    };
  } else if (action.type === actionTypes.MINUS) {
    return {
      ...state,
      inputValue: 0,
      resultValue: result,
      mode:'-',
      showingResult: true,
    };
  } else if (action.type === actionTypes.MULTIPUL) {
    return {
      ...state,
      inputValue: 0,
      resultValue: result,
      mode:'*',
      showingResult: true,
    };
  } else if (action.type === actionTypes.DIVISION) {
    return {
      ...state,
      inputValue: 0,
      resultValue: result,
      mode:'/',
      showingResult: true,
    };
  } else if (action.type === actionTypes.EQUAL) {
    return {
      ...state,
      inputValue: 0,
      resultValue: result,
      mode:'=',
      showingResult: true,
    };
  } else if (action.type === actionTypes.CLEAR) {
    return {
      ...state,
      inputValue: 0,
      resultValue: 0,
      mode:'+',
      showingResult: true,
    };
  } else {
    return state;
  }
};

export default calculator;
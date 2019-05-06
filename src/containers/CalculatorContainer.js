import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import MinusBtn from '../components/MinusBtn';
import MultipulBtn from '../components/MultipulBtn';
import DivisionBtn from '../components/DivisionBtn';
import EqualBtn from '../components/EqualBtn';
import ClearBtn from '../components/ClearBtn';
import Result from '../components/Result';

import '../Calculator.scss';

class CalculatorContainer extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <div className="calculator">
        <div className="calculator__result">
          <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
        </div>
        <div className="calculator__wrap">
          <ClearBtn onClick={actions.onClearClick} className="calculator__btn is-clear"/>
          <DivisionBtn onClick={actions.onDivisionClick} className="calculator__btn is-division" />
        </div>
        <div className="calculator__wrap">
          <NumBtn n={1} onClick={() => actions.onNumClick(1)} className="calculator__btn" />
          <NumBtn n={2} onClick={() => actions.onNumClick(2)} className="calculator__btn" />
          <NumBtn n={3} onClick={() => actions.onNumClick(3)} className="calculator__btn" />
          <MultipulBtn onClick={actions.onMultipulClick} className="calculator__btn is-multipul" />
        </div> 
        <div className="calculator__wrap">
          <NumBtn n={4} onClick={() => actions.onNumClick(4)} className="calculator__btn" />
          <NumBtn n={5} onClick={() => actions.onNumClick(5)} className="calculator__btn" />
          <NumBtn n={6} onClick={() => actions.onNumClick(6)} className="calculator__btn" />
          <MinusBtn onClick={actions.onMinusClick} className="calculator__btn is-minus" />
        </div> 
        <div className="calculator__wrap">
          <NumBtn n={7} onClick={() => actions.onNumClick(7)} className="calculator__btn" />
          <NumBtn n={8} onClick={() => actions.onNumClick(8)} className="calculator__btn" />
          <NumBtn n={9} onClick={() => actions.onNumClick(9)} className="calculator__btn" />
          <PlusBtn onClick={actions.onPlusClick} className="calculator__btn is-plus" />
        </div> 
        <div className="calculator__wrap">
          <NumBtn n={0} onClick={() => actions.onNumClick(0)} className="calculator__btn is-zero" />
          <EqualBtn onClick={actions.onEqualClick} className="calculator__btn is-equal" />
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  calculator: state.calculator,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(CalculatorContainer);
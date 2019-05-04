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

class CalculatorContainer extends Component {
  render() {
    const { calculator, actions } = this.props;
    return (
      <div>
        <div>
        <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
        </div>
        <div>
          <ClearBtn onClick={actions.onClearClick} />
        </div>
        <div>
          <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
          <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
          <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
          <DivisionBtn onClick={actions.onDivisionClick} />
        </div> 
        <div> 
          <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
          <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
          <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
          <MultipulBtn onClick={actions.onMultipulClick} />
        </div> 
        <div> 
          <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
          <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
          <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
          <MinusBtn onClick={actions.onMinusClick} />
        </div> 
        <div> 
          <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
          <PlusBtn onClick={actions.onPlusClick} />
        </div>
        <div> 
          <EqualBtn onClick={actions.onEqualClick} />
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
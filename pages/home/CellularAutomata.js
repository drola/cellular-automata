import * as React from "react";
import CellsGrid from '../../components/CellsGrid';
import RuleCase from "../../components/RuleCase";

export default class CellularAutomata extends React.Component {
  render() {
    return (
      <div>
        <h4>Grid</h4>
        <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.props.onNextButtonClick}>Next!</button>
        <br/><br/>
        <CellsGrid grid={this.props.grid}/>
        <h4>Rules</h4>
        {
          Array(32).fill(0).map((v, i) => <RuleCase key={i} caseIndex={i} result={this.props.rule[i]} onFlipRule={this.props.onFlipRule}/>)
        }
      </div>
    );
  }
}


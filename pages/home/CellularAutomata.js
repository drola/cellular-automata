import * as React from "react";
import CellsGrid from '../../components/CellsGrid';
import RuleCase from "../../components/RuleCase";

export default class CellularAutomata extends React.Component {
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <h4>Grid</h4>
          <CellsGrid grid={this.props.grid}/>
          <br/><br/>
          <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.props.onNextButtonClick}>Next!</button>
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <h4>Rules</h4>

          <div className="mdl-grid">
            {
              Array(32).fill(0).map((v, i) => <div key={i} className="mdl-cell mdl-cell--3-col"><RuleCase caseIndex={i}
                                                                                                          result={this.props.rule[i]}
                                                                                                          onFlipRule={this.props.onFlipRule}/>
              </div>)
            }
          </div>
        </div>

      </div>
    );
  }
}


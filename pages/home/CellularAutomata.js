import * as React from "react";
import CellsGrid from '../../components/CellsGrid';

export default class CellularAutomata extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.props.onNextButtonClick}>Next!</button>
        <br/><br/>
        <CellsGrid grid={this.props.grid}/>
      </div>
    );
  }
}


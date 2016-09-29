import { connect} from 'react-redux';
import {nextStep, flipRule} from "../../core/cellularAutomataActions";
import CellularAutomata from "./CellularAutomata";

const mapStateToProps = (state) => {
  return {
    grid: state.grid,
    rule: state.rule
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNextButtonClick: () => {
      dispatch(nextStep())
    },
    onFlipRule: (caseIndex, newResult) => {
      dispatch(flipRule(caseIndex, newResult));
    }
  }
};

const VisibleCellularAutomata = connect(
  mapStateToProps,
  mapDispatchToProps
)(CellularAutomata);

export default VisibleCellularAutomata;

import { connect} from 'react-redux';
import {nextStep} from "../../core/cellularAutomataActions";
import CellularAutomata from "./CellularAutomata";

const mapStateToProps = (state) => {
  return {
    grid: state.grid
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNextButtonClick: () => {
      dispatch(nextStep())
    }
  }
};

const VisibleCellularAutomata = connect(
  mapStateToProps,
  mapDispatchToProps
)(CellularAutomata);

export default VisibleCellularAutomata;

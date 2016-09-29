import React, { PropTypes } from 'react';
import s from './styles.css';

class CellsGrid extends React.Component {

  static propTypes = {
    grid: PropTypes.array
  };

  render() {
    const { grid, ...props } = this.props; // eslint-disable-line no-use-before-define


    return <svg width={grid.length*12} height={grid.length*12}> {
        grid.map((row, rowIndex) =>
          row.map((cell, columnIndex) => <g className={cell ? s.alive : s.dead} transform={'translate(' + columnIndex*12 + ', ' + rowIndex*12 + ')'}>
            <rect width="10" height="10"/>
          </g>)
        )
        }
      </svg>;
  }

}

export default CellsGrid;

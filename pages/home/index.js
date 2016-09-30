/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import VisibleCellularAutomata from './VisibleCellularAutomata';
import cellularAutomataReducer from '../../core/cellularAutomataReducers';

let initialGrid = [];
let N = 50;
for(let i = 0; i < N; i++) {
  let row = [];
  for (let j = 0; j < N; j++) {
    row.push(Math.random() > 0.5)
  }
  initialGrid.push(row);
}
let initialRule = [
  false,
  true,
  true,
  true,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
];
let store = createStore(
  cellularAutomataReducer,
  {grid: initialGrid, rule: initialRule}
);

class HomePage extends React.Component {
  render() {
    return (
      <Layout className={s.content}>
        <h1>Cellular Automaton</h1>
        <blockquote cite="https://en.wikipedia.org/wiki/Cellular_automaton">
          A cellular automaton consists of a regular grid of cells, each in one of a finite number of states, such as on and off (in contrast to a coupled map lattice). The grid can be in any finite number of dimensions. For each cell, a set of cells called its neighborhood is defined relative to the specified cell. An initial state (time t = 0) is selected by assigning a state for each cell. A new generation is created (advancing t by 1), according to some fixed rule (generally, a mathematical function) that determines the new state of each cell in terms of the current state of the cell and the states of the cells in its neighborhood.
        </blockquote>

        <Provider store={store}>
          <VisibleCellularAutomata />
        </Provider>
      </Layout>
    );
  }

}

export default HomePage;

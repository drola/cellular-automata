import {NEXT_STEP, FLIP_RULE} from './cellularAutomataActions';

function patternToIndex(self, up, down, left, right) {
  self = self ? 1 : 0;
  up = up ? 1 : 0;
  down = down ? 1 : 0;
  left = left ? 1 : 0;
  right = right ? 1 : 0;

  return self * 1 + up * 2 + down * 4 + left * 8 + right * 16;
}

export default function(state, action) {
  switch (action.type) {
    case NEXT_STEP:
      return  Object.assign({}, state, {grid:
        state.grid.map((row, i) =>
          row.map((cell, j) => {
            let N = state.grid.length;

            //Information from previous state
            let self = cell;
            let up = state.grid[(i-1 + N) % N][j];
            let down = state.grid[(i+1) % N][j];
            let left = state.grid[i][(j-1 + N) % N];
            let right  = state.grid[i][(j+1) % N];

            return state.rule[patternToIndex(self, up, down, left, right)];
          }))
      });
    case FLIP_RULE:
      let rule = state.rule.slice(0);
      rule[action.caseIndex] = action.result;
      return  Object.assign({}, state, {rule: rule});

    default:
      return state;
  }
}

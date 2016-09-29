import React, { PropTypes } from 'react';
import s from './styles.css';

function caseIndexToDirections(caseIndex) {
  let digits = [];
  while(caseIndex > 0) {
    digits.push(caseIndex % 2 == 1);
    caseIndex = Math.floor(caseIndex/2);
  }
  while(digits.length < 5) {
    digits.push(false);
  }

  return {
    self: digits[0],
    up: digits[1],
    down: digits[2],
    left: digits[3],
    right: digits[4]
  };
}

export default class RuleCase extends React.Component {

  static propTypes = {
    caseIndex: PropTypes.number,
    result: PropTypes.bool,
    onFlipRule: PropTypes.func
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.caseIndex !== nextProps.caseIndex || this.props.result !== nextProps.result;
  }

  onFlipRule() {
    if(this.props.onFlipRule) {
      this.props.onFlipRule(this.props.caseIndex, !this.props.result);
    }
  }

  render() {
    const { caseIndex, result, ...props } = this.props; // eslint-disable-line no-use-before-define
    let {self, up, down, left, right} = caseIndexToDirections(caseIndex);

    return <svg width="40" height="60" className={s.ruleCase} onClick={this.onFlipRule.bind(this)}>
        <g className={up ? s.alive : s.dead}    transform="translate(12,0)" ><rect width="10" height="10"/></g>
        <g className={down ? s.alive : s.dead}  transform="translate(12,24)" ><rect width="10" height="10"/></g>
        <g className={left ? s.alive : s.dead}  transform="translate(0,12)" ><rect width="10" height="10"/></g>
        <g className={self ? s.alive : s.dead}  transform="translate(12,12)" ><rect width="10" height="10"/></g>
        <g className={right ? s.alive : s.dead} transform="translate(24,12)" ><rect width="10" height="10"/></g>

        <g className={result ? s.alive : s.dead} transform="translate(12,42)" ><rect width="10" height="10"/></g>
      </svg>;
  }
}

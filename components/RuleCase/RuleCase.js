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

    return <svg width="72" height="36" className={s.ruleCase} onClick={this.onFlipRule.bind(this)}>
        <defs>
          <marker id="arrow" markerWidth="5" markerHeight="5" refX="0" refY="1.5" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,3 L4.5,1.5 z" fill="#ccc" />
          </marker>
        </defs>

        <g className={up ? s.alive : s.dead}    transform="translate(12,0)" ><rect width="10" height="10"/></g>
        <g className={down ? s.alive : s.dead}  transform="translate(12,24)" ><rect width="10" height="10"/></g>
        <g className={left ? s.alive : s.dead}  transform="translate(0,12)" ><rect width="10" height="10"/></g>
        <g className={self ? s.alive : s.dead}  transform="translate(12,12)" ><rect width="10" height="10"/></g>
        <g className={right ? s.alive : s.dead} transform="translate(24,12)" ><rect width="10" height="10"/></g>

        <line x1="38" y1="17" x2="40" y2="17" markerEnd="url(#arrow)" stroke="#ccc" strokeWidth="2"/>

        <g className={result ? s.alive : s.dead} transform="translate(50,12)" ><rect width="10" height="10"/></g>
      </svg>;
  }
}

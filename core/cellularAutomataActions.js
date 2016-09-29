export const NEXT_STEP = 'NEXT_STEP';

export function nextStep() {
  return {
    type: NEXT_STEP
  };
}

export const FLIP_RULE = 'FLIP_RULE';

export function flipRule(caseIndex, result) {
  return {
    type: FLIP_RULE,
    caseIndex: caseIndex,
    result: result
  };
}

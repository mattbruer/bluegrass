const numOfSteps = (timeSig) => {
  if (timeSig === [2, 2] || timeSig === [4, 4]) {
    return 16;
  }
  if (timeSig === [3, 4] || timeSig === [6, 8]) {
    return 12;
  }
};

export class Step {
  constructor() {}
}

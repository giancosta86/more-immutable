export enum PairSorting {
  LeftThenRight = -1,
  RightThenLeft = +1
}

export type Comparator<T> = (left: T, right: T) => PairSorting | number;

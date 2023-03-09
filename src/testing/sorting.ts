import { List } from "immutable";
import { Comparator } from "../core";

export function expectSorting<T>(
  sourceItems: Iterable<T>
): SortingExpectactionStep2<T> {
  return new SortingExpectactionStep2(sourceItems);
}

class SortingExpectactionStep2<T> {
  constructor(private readonly sourceItems: Iterable<T>) {}

  withComparator(comparator: Comparator<T>): SortingExpectactionStep3<T> {
    return new SortingExpectactionStep3(this.sourceItems, comparator);
  }
}

class SortingExpectactionStep3<T> {
  constructor(
    private readonly sourceItems: Iterable<T>,
    private readonly comparator: Comparator<T>
  ) {}

  toBe(expectedSortedItems: Iterable<T>): void {
    const actualSortedItems = List(this.sourceItems).sort(this.comparator);

    expect(actualSortedItems).toEqual(List(expectedSortedItems));
  }
}

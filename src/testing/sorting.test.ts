import { Comparator, List, PairSorting } from "immutable";
import { expectSorting } from "./sorting";

describe("Sorting expectation", () => {
  const testComparator: Comparator<number> = (left, right) => {
    if (left >= 90 && right < 90) {
      return PairSorting.LeftThenRight;
    } else if (left < 90 && right >= 90) {
      return PairSorting.RightThenLeft;
    }

    return left - right;
  };

  const sourceItems = [3, 5, 7, 10, 90, 92];
  const expectedSortedItems = [90, 92, 3, 5, 7, 10];

  describe.each([
    [
      "arrays",
      sourceItems,
      expectedSortedItems,
      [...expectedSortedItems, 9999]
    ],
    [
      "lists",
      List(sourceItems),
      List(expectedSortedItems),
      List(expectedSortedItems).push(9999)
    ]
  ])(
    "for %s",
    (
      _iterableType,
      sourceIterable,
      expectedSortedIterable,
      failingExpectedIterable
    ) => {
      it("should do nothing when satisfied", () => {
        expectSorting(sourceIterable)
          .withComparator(testComparator)
          .toBe(expectedSortedIterable);
      });

      it("should throw an error when failing", () => {
        expect(() => {
          expectSorting(sourceIterable)
            .withComparator(testComparator)
            .toBe(failingExpectedIterable);
        }).toThrow(/-\s+9999/);
      });
    }
  );
});

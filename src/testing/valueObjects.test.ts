import { ValueObject } from "immutable";
import { testEqualsAndHashCode } from "./valueObjects";

class NumberWrapper implements ValueObject {
  constructor(readonly value: number) {}

  equals(other: unknown): boolean {
    if (!(other instanceof NumberWrapper)) {
      return false;
    }

    return this.value == other.value;
  }

  hashCode(): number {
    return this.value;
  }
}

describe("Number wrapper", () => {
  testEqualsAndHashCode(() => new NumberWrapper(90));
});

import { Map, ValueObject } from "immutable";

export function testEqualsAndHashCode<T extends ValueObject>(factory: () => T) {
  it("should be usable as a Map key", () => {
    const originalKey = factory();
    const identicalKey = factory();

    const storedValue = 90;

    const map = Map<T, number>([[originalKey, storedValue]]);
    const retrievedValue = map.get(identicalKey);

    expect(retrievedValue).toBe(storedValue);
  });

  describe("equality", () => {
    describe("with undefined", () => {
      it("should return false", () => {
        const instance = factory();

        const equalityResult = instance.equals(undefined);

        expect(equalityResult).toBeFalse();
      });
    });
  });

  describe("hash code", () => {
    describe("for distinct but equal instances", () => {
      it("should be the same", () => {
        const firstCode = factory().hashCode();
        const secondCode = factory().hashCode();

        expect(firstCode).toBe(secondCode);
      });
    });
  });
}

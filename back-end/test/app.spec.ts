import { shortener } from "../src/utils/helpers";
describe("The shortener function", () => {
  let url = shortener();
  test("to have length of 8", () => {
    expect(url).toHaveLength(8);
  });

  test("to be truthy", () => {
    expect(url).toBeTruthy();
  });
});

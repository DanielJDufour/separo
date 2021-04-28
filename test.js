const test = require("flug");
const separo = require("./separo");

test("no sep", ({ eq }) => {
  const result = separo("Test", " ");
  eq(result, ["Test"]);
});

test("basic", ({ eq }) => {
  const result = separo("I see", " ");
  eq(result, ["I", "see"]);
});

test("keep", ({ eq }) => {
  const result = separo("The dog runs.", " ", { keepSep: true });
  eq(result, ["The", " ", "dog", " ", "runs."]);
});

test("attach", ({ eq }) => {
  const result = separo("The dog runs.", " ", { attachSep: true });
  eq(result, ["The", " dog", " runs."]);
});

test("multiple (simple)", ({ eq }) => {
  const result = separo("The dog runs.", [" ", '.']);
  eq(result, ["The", "dog", "runs"]);
});

test("multiple (keep)", ({ eq }) => {
  const result = separo("The dog runs.", [" ", '.'], { keepSep: true });
  eq(result, ["The", " ", "dog", " ", "runs", "."]);
});

test("multiple (attach)", ({ eq }) => {
  const result = separo("The dog runs.", [" ", '.'], { attachSep: true });
  eq(result, ["The", " dog", " runs", "."]);
});

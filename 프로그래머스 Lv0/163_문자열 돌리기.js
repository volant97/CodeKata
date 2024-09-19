const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
  line.split("").map((v) => {
    console.log(v);
  });
}).on("close", function () {
  str = input[0];
});

// 다른풀이1
const readline = require("readline");
const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input2 = [];

rl2
  .on("line", function (line) {
    input2 = [line];
  })
  .on("close", function () {
    str = input2[0];
    [...str].forEach((c) => console.log(c));
  });

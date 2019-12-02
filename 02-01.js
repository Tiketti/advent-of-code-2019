const input = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  10,
  1,
  19,
  1,
  19,
  9,
  23,
  1,
  23,
  13,
  27,
  1,
  10,
  27,
  31,
  2,
  31,
  13,
  35,
  1,
  10,
  35,
  39,
  2,
  9,
  39,
  43,
  2,
  43,
  9,
  47,
  1,
  6,
  47,
  51,
  1,
  10,
  51,
  55,
  2,
  55,
  13,
  59,
  1,
  59,
  10,
  63,
  2,
  63,
  13,
  67,
  2,
  67,
  9,
  71,
  1,
  6,
  71,
  75,
  2,
  75,
  9,
  79,
  1,
  79,
  5,
  83,
  2,
  83,
  13,
  87,
  1,
  9,
  87,
  91,
  1,
  13,
  91,
  95,
  1,
  2,
  95,
  99,
  1,
  99,
  6,
  0,
  99,
  2,
  14,
  0,
  0
];

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 * num2;
    default:
      throw new error();
  }
};

let opcode = 0;
let index = 0;

input[1] = 12;
input[2] = 2;

while (opcode != 99) {
  const opcode = input[index];
  const pos1 = input[index + 1];
  const pos2 = input[index + 2];
  const outputPos = input[index + 3];

  if (opcode == 99) {
    break;
  }

  input[outputPos] = calculator(input[pos1], input[pos2], opcode);

  index += 4;
}

console.log(input[0]);

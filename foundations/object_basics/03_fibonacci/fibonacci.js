const fibonacci = function (count) {
  if (!Number.isInteger(count)) count = Number(count);

  if (count === 0) {
    return 0;
  }

  if (count < 0) return "OOPS";

  let f1 = 1;
  let f2 = 1;

  let fsList = [f1, f2];

  let last = f1;
  let next = f2;

  let member = 0;

  while (fsList.length < count) {
    member = last + next;
    fsList.push(member);
    last = next;
    next = member;
  }

  return fsList.pop();
};

// Do not edit below this line
module.exports = fibonacci;

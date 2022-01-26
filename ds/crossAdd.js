function crossAdd(input) {
  var add = [];
  for (var index = 0; index < add.length; index++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    add.push(goingDown + goingUp);
  }
  return add;
}

console.log(crossAdd([5, 2, 3, 4, 10]));

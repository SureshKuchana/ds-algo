function pattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
pattern(2);

// remove duplicates in array

let a = [1, 2, 3, 4, 4];

function removeDup(a) {
  let dup = false;
  do {
    dup = false;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (a[j] === a[j + 1]) {
          dup = true;
        }
      }
    }
  } while (dup);
}

removeDup(a);

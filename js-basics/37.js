const countChars = (str, char) => {
  let i = 0;
  let count = 0;

  while (i < str.length) {
    if (str[i].toUpperCase() === char.toUpperCase()) {
      count = count + 1;
    }
    i = i + 1;
  }

  return count;
};

countChars('HexlEt', 'e'); // 2
countChars('HexlEt', 'E'); // 2

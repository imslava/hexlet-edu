const joinNumbersFromRange = (start, end) => {
  let result = '';
  let i = start;

  while (i <= end) {
    result = `${result}${i}`;
    i += 1;
  }

  return result;
};

joinNumbersFromRange(5, 10); // '5678910'

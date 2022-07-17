const mySubstr = (text, number) => {
  let i = 0;
  let result = '';

  while (i < number) {
    result = result + text[i];
    i += 1;
  }

  return result;
};

const text = 'If I look back I am lost';
console.log(mySubstr(text, 1)); // => 'I'
console.log(mySubstr(text, 7)); // => 'If I lo'

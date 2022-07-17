const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';

  while (i < str.length) {
    if ((i + 1) % n === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
    i += 1;
  }

  return result;
};

const text = 'I never look back';
makeItFunny(text, 3); // 'I NevEr LooK bAck'

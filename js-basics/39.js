const encrypt = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i += 2) {
    result += (str[i + 1] || '') + str[i];
  }

  return result;
};

encrypt('move'); // 'omev'
encrypt('attack'); // 'taatkc'

// Если число символов нечётное,
// то последний символ остаётся на своём месте
encrypt('go!'); // 'og!'

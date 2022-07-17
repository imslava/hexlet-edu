const getHiddenCard = (cardNumber, starsCount = 4) => {
  const visibleDigitsLine = cardNumber.slice(12);
  return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
};

getHiddenCard('1234567812345678', 2); // "**5678"
getHiddenCard('1234567812345678', 3); // "***5678"
getHiddenCard('1234567812345678'); // "****5678"
getHiddenCard('2034399002121100', 1); // "*1100"

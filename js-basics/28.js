const isInternationalPhone = (str) => str[0] === '+';

isInternationalPhone('89602223423'); // false
isInternationalPhone('+79602223423'); // true

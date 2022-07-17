const truncate = (text, length) => {
  const result = `${text.slice(0, length)}...`;
  return result;
};

truncate('hexlet', 2);

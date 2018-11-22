function sumItems(array) {
  let result = 0;

  array.forEach((item) => {
    if (Array.isArray(item)) {
      result += sumItems(item);

    } else {
      result += item;

    }
  });
  
  return result;
}

module.exports = sumItems;
